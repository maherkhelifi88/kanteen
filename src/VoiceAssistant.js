import React, { useState, useEffect, useRef } from 'react';
import './VoiceAssistant.css';
import Carousel from './carousel';

const VoiceAssistant = () => {
    const [currentText, setCurrentText] = useState('');
    const [isReading, setIsReading] = useState(false);
    const sentencesRef = useRef([
        "Hey Akshit! Got your weekend covered buddy!",
        "So here's what I'm thinking: First, we could go on this awesome Mezcal tour.",
        "Or, we could check out some of these super cozy spots in town I've been hearing about.",
        "And you know what else? I've compiled a list of places that your friends and your favorite Instagram influencers are raving about.",
        "Let's dive in, shall we?"
    ]);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

    const speakSentence = (sentence) => {
        setIsReading(true);
        const utterance = new SpeechSynthesisUtterance(sentence);

        // Function to select a voice
        const selectVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            let selectedVoice;

            
            const preferredVoiceNames = [ "Karen", "Moira", "Tessa", "Tom", "Samantha"];
            
            // Try to find a preferred voice
            for (const name of preferredVoiceNames) {
                selectedVoice = voices.find(voice => voice.name === name);
                if (selectedVoice) break;
            }

            // Fallback to the first English voice if the preferred is not found
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => voice.lang.startsWith('en')) || voices[0];
            }

            return selectedVoice;
        };

        // Set the voice
        utterance.voice = selectVoice();
        utterance.lang = utterance.voice.lang; // Set the lang to match the selected voice

        // Set a more natural rate and pitch
        utterance.rate = 1.0; // Adjust as needed
        utterance.pitch = 1.0; // Adjust as needed
        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const word = sentence.substring(event.charIndex, event.charIndex + event.charLength);
                setCurrentText((prev) => prev + word + ' ');
            }
        };

        utterance.onend = () => {
            if (currentSentenceIndex < sentencesRef.current.length - 1) {
                setTimeout(() => {
                    setCurrentText('');
                    setCurrentSentenceIndex(currentSentenceIndex + 1);
                }, 500); // Delay between sentences
            } else {
                setIsReading(false);
            }
        };

        window.speechSynthesis.speak(utterance);
    };
    const handleStartReading = () => {
        if (currentSentenceIndex < sentencesRef.current.length) {
            speakSentence(sentencesRef.current[currentSentenceIndex]);
        }
    };
    useEffect(() => {
        const handleVoicesChanged = () => {

            // Start with the first sentence
            if (currentSentenceIndex < sentencesRef.current.length) {
                speakSentence(sentencesRef.current[currentSentenceIndex]);
            }
        };
        // Ensure we handle voices being loaded
        if (speechSynthesis.getVoices().length > 0) {
            handleVoicesChanged();
        } else {
            speechSynthesis.onvoiceschanged = handleVoicesChanged;
        }

        // Clean up
        return () => {
            speechSynthesis.cancel();
            speechSynthesis.onvoiceschanged = null;
        };
    }, [currentSentenceIndex]);

    return (
        <div className="assistant-container">
            <h1
                className="h1"

            >
                Hey!
            </h1>
            <button
                onClick={handleStartReading}
                style={{ opacity: 0, cursor: 'pointer' }}>
                Start Reading
            </button>

            <div className="text-container">
                <p className="spoken-text">{currentText}</p>
            </div>
            <div className="carousel-container">
                <Carousel />
            </div>
        </div>
    );
};

export default VoiceAssistant;
