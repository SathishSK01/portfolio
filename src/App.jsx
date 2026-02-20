import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profilePic from "./assets/profile_pic.jpg";
import "./App.css";

export default function App() {
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

        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Sathish Kumar"
          className="w-40 h-40 mx-auto rounded-full mb-8 border-4 border-blue-500 shadow-lg object-cover"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Backend Engineer <br />
          <span className="text-blue-500">Node.js</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Backend Developer with 4+ years of experience building scalable,
          high-performance backend systems across Banking, OTT/IPTV, and
          Healthcare domains. Strong expertise in Node.js, Express.js,
          MongoDB, Kafka, and AWS cloud services.
        </p>

        <div className="space-x-4">
          <a
            href="#experience"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
          >
            View Experience
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition"
          >
            Contact Me
          </a>
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
              items: ["JavaScript", "TypeScript"]
            },
            {
              title: "Backend Development",
              items: [
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "Microservices Architecture"
              ]
            },
            {
              title: "Databases",
              items: [
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "Elasticsearch",
                "ClickHouse"
              ]
            },
            {
              title: "Messaging & Streaming",
              items: [
                "Apache Kafka",
                "Zookeeper"
              ]
            },
            {
              title: "Cloud & DevOps",
              items: [
                "AWS (EC2, ECS, Lambda, S3)",
                "Docker",
                "CI/CD Pipelines"
              ]
            },
            {
              title: "Monitoring & Scheduling",
              items: [
                "Grafana",
                "Kfuse",
                "Airflow",
                "Cron Jobs"
              ]
            },
            {
              title: "Tools",
              items: [
                "Git",
                "GitHub",
                "Jira",
                "Postman",
                "WebStorm",
                "Linux"
              ]
            }
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
              <li>• Designed scalable RESTful APIs for banking clients.</li>
              <li>• Architected microservices-based backend systems.</li>
              <li>• Optimized performance with indexing and query tuning.</li>
              <li>• Implemented secure token-based authentication.</li>
              <li>• Integrated third-party payment gateways.</li>
              <li>• Deployed services on AWS with high availability.</li>
              <li>• Provided production support and root cause analysis.</li>
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
              <li>• Built backend services for IPTV & OTT platforms.</li>
              <li>• Designed APIs for subscription management.</li>
              <li>• Integrated DRM, CDN, and SMS systems.</li>
              <li>• Automated video pipelines using FFMPEG.</li>
              <li>• Implemented CI/CD pipelines.</li>
              <li>• Collaborated with cross-functional teams.</li>
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
              <li>• Developed backend APIs for healthcare apps.</li>
              <li>• Designed database schemas and optimized queries.</li>
              <li>• Implemented data migration and reporting automation.</li>
              <li>• Assisted in production monitoring and debugging.</li>
              <li>• Reduced manual workload through backend automation.</li>
            </ul>
          </div>

        </div>
      </section>

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
          <p>GitHub: github.com/sathishSK01</p>
          <p>LinkedIn: linkedin.com/in/sathish-kumar-g-033aa414a</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Sathish Kumar — Built with React & Tailwind
      </footer>

    </div>
  );
}
