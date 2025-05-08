import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NerdRezult from "./NerdRezult";
import JoinAsExpert from "./JoinAsExpert";
import AIExpertApplication from "./AIExpertApplication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NerdRezult />} />
        <Route path="/join-as-expert" element={<JoinAsExpert />} />
        <Route
          path="/ai-expert-application"
          element={<AIExpertApplication />}
        />
      </Routes>
    </Router>
  );
}

export default App;
