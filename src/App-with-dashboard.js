import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NerdRezult from "./NerdRezult";
import JoinAsExpert from "./JoinAsExpert";
import AIExpertApplication from "./AIExpertApplication";

// Import dashboard pages
import ExpertDashboard from "./pages/dashboard/ExpertDashboard";
import AIServices from "./pages/dashboard/AIServices";

// This is a modified version of App.js that includes dashboard routes
function App() {
  return (
    <Router>
      <Routes>
        {/* Original routes */}
        <Route path="/" element={<NerdRezult />} />
        <Route path="/join-as-expert" element={<JoinAsExpert />} />
        <Route
          path="/ai-expert-application"
          element={<AIExpertApplication />}
        />

        {/* New dashboard routes */}
        <Route path="/expert-dashboard" element={<ExpertDashboard />} />
        <Route path="/expert-dashboard/services" element={<AIServices />} />
        {/* Add more dashboard routes as they are implemented */}
        {/* <Route path="/expert-dashboard/contracts" element={<Contracts />} /> */}
        {/* <Route path="/expert-dashboard/payments" element={<Payments />} /> */}
        {/* <Route path="/expert-dashboard/analytics" element={<Analytics />} /> */}
        {/* <Route path="/expert-dashboard/profile" element={<Profile />} /> */}
        {/* <Route path="/expert-dashboard/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

/*
NOTE: To integrate this dashboard:

1. You can either replace the content of your existing App.js with this code
   or create a separate file and merge the routes manually.

2. Make sure to implement the remaining dashboard pages and uncomment their routes.

3. You may want to add authentication protection to these routes to ensure
   only logged-in experts can access the dashboard.
*/
