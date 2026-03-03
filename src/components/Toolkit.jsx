"use client";

import { useState } from "react";
import { FaReact, FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiHaskell, SiPurescript, SiKubernetes, SiJenkins, SiGooglecloud, SiNixos, SiPython, SiJavascript, SiPostgresql, SiPrometheus, SiGrafana } from "react-icons/si";

const categoryData = [
  {
    name: "AI & Machine Learning",
    icon: <span className="font-bold">A</span>,
    items: [
      { name: "vLLM", description: "High-throughput LLM serving", icon: <span className="font-bold">v</span> },
      { name: "SGLang", description: "Structured Generation Language", icon: <span className="font-bold">S</span> },
      { name: "Ollama", description: "Local LLM serving", icon: <span className="font-bold">O</span> },
    ],
  },
  {
    name: "Languages",
    icon: <span className="font-bold">L</span>,
    items: [
      { name: "Haskell", description: "Functional programming, type safety", icon: <SiHaskell className="text-purple-600" /> },
      { name: "PureScript", description: "Strongly-typed FP for frontend", icon: <SiPurescript className="text-indigo-600" /> },
      { name: "Python", description: "Automation, scripting, ML tooling", icon: <SiPython className="text-yellow-500" /> },
      { name: "JavaScript", description: "Frontend and backend applications", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Java", description: "Backend and Android development", icon: <FaJava className="text-red-600" /> },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: <span className="font-bold">F</span>,
    items: [
      { name: "React", description: "Modern web UI development", icon: <FaReact className="text-sky-500" /> },
      { name: "Presto", description: "Cross-platform PureScript framework", icon: <SiHaskell className="text-pink-600" /> },
      { name: "Streamly", description: "Haskell streaming library", icon: <span className="font-bold">S</span> },
    ],
  },
  {
    name: "Databases",
    icon: <span className="font-bold">D</span>,
    items: [
      { name: "PostgreSQL", description: "Relational database management system", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "Vespa", description: "Vector database for AI applications", icon: <span className="font-bold">V</span> },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <span className="font-bold">C</span>,
    items: [
      { name: "AWS", description: "Cloud infrastructure and services", icon: <FaAws className="text-orange-500" /> },
      { name: "Google Cloud", description: "Cloud infrastructure and services", icon: <SiGooglecloud className="text-blue-500" /> },
      { name: "Kubernetes", description: "Container orchestration and scaling", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Docker", description: "Containerization and deployments", icon: <FaDocker className="text-sky-600" /> },
      { name: "Jenkins", description: "CI/CD automation", icon: <SiJenkins className="text-red-500" /> },
      { name: "Nix", description: "Reproducible builds and environments", icon: <SiNixos className="text-sky-500" /> },
    ],
  },
  {
    name: "Monitoring",
    icon: <span className="font-bold">M</span>,
    items: [
      { name: "Grafana", description: "Visualization and analytics", icon: <SiGrafana className="text-orange-500" /> },
      { name: "Prometheus", description: "Metrics and alerting", icon: <SiPrometheus className="text-orange-600" /> },
      { name: "Loki", description: "Log aggregation", icon: <SiGrafana className="text-red-500" /> },
      { name: "Promtail", description: "Log agent for Loki", icon: <SiPrometheus className="text-gray-500" /> },
    ],
  },
  {
    name: "Testing",
    icon: <span className="font-bold">T</span>,
    items: [
      { name: "Pytest", description: "Unit and integration testing", icon: <SiPython className="text-green-500" /> },
      { name: "Katalon", description: "End-to-end automation", icon: <span className="font-bold">K</span> },
    ],
  },
];

export default function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState("AI & Machine Learning");

  return (
    <section id="toolkit" className="mb-16 scroll-mt-20">
      <h3 className="text-4xl font-bold text-center mb-12 dark:text-gray-100">Technical Toolkit</h3>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 overflow-x-auto pb-2">
        {categoryData.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name === selectedCategory ? null : cat.name)}
            className={`flex items-center space-x-3 px-5 py-3 rounded-full transition-all whitespace-nowrap ${selectedCategory === cat.name ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'}`}
          >
            {cat.icon}
            <span className="font-medium">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Show tech items or welcome message */}
      <div className="max-w-5xl mx-auto" id="tech-items">
        {selectedCategory ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-inner">
            {categoryData
              .find((c) => c.name === selectedCategory)
              ?.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start space-x-4 p-5 bg-white/80 dark:bg-gray-700/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-blue-100 dark:border-gray-600"
                >
                  <div className="text-2xl shrink-0 group-hover:animate-bounce">{item.icon}</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2 text-slate-800 dark:text-white font-semibold text-blue-700 dark:text-blue-400 transition-all hover:underline decoration-2 underline-offset-4">{item.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 text-slate-700 dark:text-gray-200">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mb-8 italic p-4 bg-blue-50/30 dark:bg-gray-800/50 rounded-xl">
            Click a category above to view technologies
          </div>
        )}
      </div>
    </section>
  );
}
