import React from "react";

// Comparison data
const comparisonData = {
  headers: ["Features", "NerdRezult", "Fiverr", "Upwork", "Toptal"],
  rows: [
    {
      feature: "Pricing Model",
      nerdRezult: "Outcome-based",
      fiverr: "Gig-based",
      upwork: "Hourly/Project-based",
      toptal: "Premium Hourly",
    },
    {
      feature: "Talent Vetting",
      nerdRezult: "Highly selective AI/ML experts",
      fiverr: "Open marketplace",
      upwork: "Open marketplace",
      toptal: "Rigorous vetting",
    },
    {
      feature: "Project Scope",
      nerdRezult: "AI-specific, milestone-driven",
      fiverr: "Small gigs",
      upwork: "Freelance tasks",
      toptal: "High-end development",
    },
    {
      feature: "Client Base",
      nerdRezult: "AI-driven enterprises & startups",
      fiverr: "General businesses",
      upwork: "General businesses",
      toptal: "High-budget clients",
    },
    {
      feature: "Matching Algorithm",
      nerdRezult: "AI-powered intelligent matching",
      fiverr: "User-search-based",
      upwork: "Algorithm & user-search",
      toptal: "Hand-matched talent",
    },
    {
      feature: "Support & Quality Control",
      nerdRezult: "AI-driven quality audits",
      fiverr: "Minimal support",
      upwork: "Limited support",
      toptal: "High-touch management",
    },
  ],
};

function ComparisonTable() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how NerdRezult stands out from traditional freelance platforms
            and consulting firms with our innovative outcome-based approach to
            AI talent.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                {comparisonData.headers.map((header, index) => (
                  <th
                    key={index}
                    className={`py-4 px-6 ${
                      index === 1
                        ? "bg-indigo-700 text-center"
                        : index === 0
                        ? "text-left"
                        : "text-center"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    {row.nerdRezult}
                  </td>
                  <td className="py-4 px-6 text-center">{row.fiverr}</td>
                  <td className="py-4 px-6 text-center">{row.upwork}</td>
                  <td className="py-4 px-6 text-center">{row.toptal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;
