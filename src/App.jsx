import { useEffect, useState } from "react";
import profilePic from "./assets/profile_pic.jpg";
import axios from "axios";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import handleDownload from "./resume.jsx";
import "./App.css";


export default function App() {

  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/contact")
      .then((res) => {
        if (res?.data?.whatsappNumber) {
          setWhatsappNumber(res.data.whatsappNumber);
        } else {
          setWhatsappNumber("8637486737"); // fallback
        }
      })
      .catch((err) => {
        console.error("Error fetching WhatsApp number:", err);
        setWhatsappNumber("8637486737"); // fallback if API fails
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-blue-500">
            Sathish Kumar
          </h1>

          <div className="space-x-6 text-gray-300 hidden md:block">
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-28 px-6 text-center bg-gradient-to-b from-gray-950 to-gray-900">
        <img
          src={profilePic}
          alt="Sathish Kumar"
          className="w-40 h-40 mx-auto rounded-full mb-8 border-4 border-blue-500 shadow-lg object-cover"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Backend Engineer <br />
          <span className="text-blue-500">Node.js</span>
        </h1>

      <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
      Backend Developer with 4+ years of experience building scalable and 
      high-performance backend systems across Banking, OTT/IPTV, and Healthcare domains. 
      Strong expertise in Node.js, Express.js, MongoDB, Kafka, and AWS cloud services. 
      Proven ability to design microservices architectures, optimize API performance, 
      resolve critical production issues, and deliver scalable solutions faster.
      </p>
<div className="flex flex-wrap justify-center gap-4">

  {/* Download Resume */}
  <button
  onClick={handleDownload}
  className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition shadow-lg"
  >
  Download Resume
</button>

</div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Languages",
              items: ["JavaScript", "TypeScript"],
            },
            {
              title: "Backend Development",
              items: [
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "Microservices Architecture",
              ],
            },
            {
              title: "Databases",
              items: [
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "Elasticsearch",
                "ClickHouse",
              ],
            },
            {
              title: "Messaging & Streaming",
              items: ["Apache Kafka", "Zookeeper"],
            },
            {
              title: "Cloud & DevOps",
              items: [
                "AWS (EC2, ECS, Lambda, S3)",
                "Docker",
                "CI/CD Pipelines",
              ],
            },
            {
              title: "Monitoring & Scheduling",
              items: ["Grafana", "Kfuse", "Airflow", "Cron Jobs"],
            },
            {
              title: "Tools",
              items: [
                "Git",
                "GitHub",
                "Jira",
                "Postman",
                "WebStorm",
                "Linux",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-blue-500 hover:-translate-y-2 transform transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                {section.title}
              </h3>

              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                {section.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    {/* Experience */}
<section id="experience" className="py-24 px-6 bg-gray-950">
  <h2 className="text-4xl font-bold text-center mb-16">
    Professional Experience
  </h2>

  <div className="max-w-5xl mx-auto space-y-16">

    {/* Metaz Digital */}
    <div className="border-l-4 border-blue-500 pl-8">
      <h3 className="text-2xl font-semibold">
        Backend Developer
      </h3>
      <p className="text-blue-400 font-medium">
        Metaz Digital Pvt Ltd – Client: Vymo Technologies
      </p>
      <p className="text-gray-500 mb-6">
        Jan 2024 – Jan 2026
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>• Designed and developed scalable RESTful APIs serving 100K+ daily users.</li>
        <li>• Architected microservices using Node.js and Kafka improving system reliability by 30%.</li>
        <li>• Optimized MongoDB & PostgreSQL queries reducing response time by 40%.</li>
        <li>• Implemented JWT-based authentication and RBAC security.</li>
        <li>• Integrated third-party payment gateways for banking workflows.</li>
        <li>• Deployed applications on AWS (EC2, ECS, S3) with high availability setup.</li>
        <li>• Led production issue debugging and reduced downtime incidents.</li>
      </ul>
    </div>

    {/* Infynect Labs */}
    <div className="border-l-4 border-blue-500 pl-8">
      <h3 className="text-2xl font-semibold">
        Backend Developer
      </h3>
      <p className="text-blue-400 font-medium">
        Infynect Labs Pvt Ltd
      </p>
      <p className="text-gray-500 mb-6">
        Sep 2022 – Oct 2023
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>• Built backend services for IPTV & OTT platforms supporting subscription lifecycle management.</li>
        <li>• Designed scalable APIs handling video metadata and DRM integrations.</li>
        <li>• Integrated CDN, SMS gateway, and payment systems.</li>
        <li>• Automated video processing pipelines using FFMPEG.</li>
        <li>• Implemented CI/CD pipelines reducing deployment time by 50%.</li>
        <li>• Collaborated with frontend and DevOps teams for release cycles.</li>
      </ul>
    </div>

    {/* Aquity Solutions */}
    <div className="border-l-4 border-blue-500 pl-8">
      <h3 className="text-2xl font-semibold">
        Junior Software Engineer – Backend
      </h3>
      <p className="text-blue-400 font-medium">
        Aquity Solutions Pvt Ltd
      </p>
      <p className="text-gray-500 mb-6">
        Jun 2020 – Jan 2022
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>• Developed backend APIs for healthcare data processing systems.</li>
        <li>• Designed relational database schemas and improved query performance.</li>
        <li>• Automated reporting workflows reducing manual processing effort.</li>
        <li>• Assisted in production monitoring and resolved critical bugs.</li>
        <li>• Improved backend automation reducing operational workload.</li>
      </ul>
    </div>

  </div>
</section>
      {/* WhatsApp Floating Button */}
      {!loading && whatsappNumber && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Chat with me
          </span>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Sathish%2C%20I%20visited%20your%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition transform hover:scale-110"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <FaWhatsapp size={28} className="relative z-10" />
          </a>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mb-8">
          Open to backend engineering opportunities and challenging projects.
        </p>

        <div className="space-y-3 text-gray-300">
          <p>Mobile: +91-8904500422</p>
          <p>Email: sathish09cs@gmail.com</p>
          <a
          href="https://github.com/sathishSK01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-blue-400 transition"
          >
          GitHub
          </a>
          <a
          href="https://linkedin.com/in/sathish-kumar-g-033aa414a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-blue-400 transition"
          >
          <FaLinkedin size={20} />
          LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Sathish Kumar — Built with React & Tailwind
      </footer>
    </div>
  );
}
