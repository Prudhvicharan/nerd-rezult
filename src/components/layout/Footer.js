import React from "react";
import { Cpu } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Cpu className="h-8 w-8 text-indigo-400" />
              <h3 className="text-2xl font-bold">
                Nerd<span className="text-indigo-400">Rezult</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing the AI talent marketplace with our outcome-based
              approach.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="#"
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 5.46a8.14 8.14 0 0 1-2.32.64 4.07 4.07 0 0 0 1.8-2.27 8.1 8.1 0 0 1-2.56.97 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.39 4.3a4.14 4.14 0 0 0 1.27 5.47 4.05 4.05 0a4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 15.45a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67V5.15A8.3 8.3 0 0 0 22 5.46Z" />
                  </svg>
                }
              />
              <SocialLink
                href="#"
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z" />
                  </svg>
                }
              />
              <SocialLink
                href="#"
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9.22h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12ZM18.91 18.74h-3v-4.83c0-1.22-.43-2-1.5-2A1.57 1.57 0 0 0 12.91 13a2 2 0 0 0-.1.73v5h-3v-9.22h3v1.3a2.93 2.93 0 0 1 2.71-1.49c2 0 3.39 1.23 3.39 3.86Z" />
                  </svg>
                }
              />
            </div>
          </div>

          <FooterLinks
            title="For Businesses"
            links={[
              "How It Works",
              "AI Talent Solutions",
              "Enterprise Plans",
              "Success Stories",
              "AI Industry Solutions",
            ]}
          />

          <FooterLinks
            title="For AI Experts"
            links={[
              "Join Our Network",
              "Expert Verification",
              "AI Certification Programs",
              "Project Matching",
              "Success Stories",
            ]}
          />

          <FooterLinks
            title="Company"
            links={["About Us", "Contact", "Blog", "Careers", "Press"]}
          />
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} NerdRezult. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper components
function SocialLink({ href, icon }) {
  return (
    <a href={href} className="text-gray-400 hover:text-white">
      {icon}
    </a>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">{title}</h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-gray-400 hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
