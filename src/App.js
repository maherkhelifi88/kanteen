import React from 'react';
import VoiceAssistant from './VoiceAssistant';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mezcal from './mezcal'
import Mezcal1 from './mezcal1'
import Mezcal2 from './mezcal2'
import Mezcal3 from './mezcal3'
import Mezcal4 from './mezcal4'
import Carbonara from './jcp'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VoiceAssistant/>} />
          <Route path="/mezcal" element={<Mezcal/>} />
          <Route path="/mezcal1" element={<Mezcal1/>} />
          <Route path="/mezcal2" element={<Mezcal2/>} />
          <Route path="/mezcal3" element={<Mezcal3/>} />
          <Route path="/mezcal4" element={<Mezcal4/>} />
          <Route path="/carbonara" element={<Carbonara/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
