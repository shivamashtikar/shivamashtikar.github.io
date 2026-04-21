export const categories = [
  {
    name: "AI & Machine Learning",
    icon: "A",
    items: [
      { name: "vLLM", description: "High-throughput LLM serving", icon: "v" },
      { name: "SGLang", description: "Structured Generation Language", icon: "S" },
      { name: "Ollama", description: "Local LLM serving", icon: "O" }
    ]
  },
  {
    name: "Languages",
    icon: "L",
    items: [
      { name: "Haskell", description: "Functional programming, type safety", iconType: "si", iconName: "SiHaskell", color: "text-purple-600" },
      { name: "PureScript", description: "Strongly-typed FP for frontend", iconType: "si", iconName: "SiPurescript", color: "text-indigo-600" },
      { name: "Python", description: "Automation, scripting, ML tooling", iconType: "si", iconName: "SiPython", color: "text-yellow-500" },
      { name: "JavaScript", description: "Frontend and backend applications", iconType: "si", iconName: "SiJavascript", color: "text-yellow-400" },
      { name: "Java", description: "Backend and Android development", iconType: "fa", iconName: "FaJava", color: "text-red-600" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    icon: "F",
    items: [
      { name: "React", description: "Modern web UI development", iconType: "fa", iconName: "FaReact", color: "text-sky-500" },
      { name: "Presto", description: "Cross-platform PureScript framework", iconType: "si", iconName: "SiHaskell", color: "text-pink-600" },
      { name: "Streamly", description: "Haskell streaming library", icon: "S" }
    ]
  },
  {
    name: "Databases",
    icon: "D",
    items: [
      { name: "PostgreSQL", description: "Relational database management system", iconType: "si", iconName: "SiPostgresql", color: "text-blue-600" },
      { name: "Vespa", description: "Vector database for AI applications", icon: "V" }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: "C",
    items: [
      { name: "AWS", description: "Cloud infrastructure and services", iconType: "fa", iconName: "FaAws", color: "text-orange-500" },
      { name: "Google Cloud", description: "Cloud infrastructure and services", iconType: "si", iconName: "SiGooglecloud", color: "text-blue-500" },
      { name: "Kubernetes", description: "Container orchestration and scaling", iconType: "si", iconName: "SiKubernetes", color: "text-blue-500" },
      { name: "Docker", description: "Containerization and deployments", iconType: "fa", iconName: "FaDocker", color: "text-sky-600" },
      { name: "Jenkins", description: "CI/CD automation", iconType: "si", iconName: "SiJenkins", color: "text-red-500" },
      { name: "Nix", description: "Reproducible builds and environments", iconType: "si", iconName: "SiNixos", color: "text-sky-500" }
    ]
  },
  {
    name: "Monitoring",
    icon: "M",
    items: [
      { name: "Grafana", description: "Visualization and analytics", iconType: "si", iconName: "SiGrafana", color: "text-orange-500" },
      { name: "Prometheus", description: "Metrics and alerting", iconType: "si", iconName: "SiPrometheus", color: "text-orange-600" },
      { name: "Loki", description: "Log aggregation", iconType: "si", iconName: "SiGrafana", color: "text-red-500" },
      { name: "Promtail", description: "Log agent for Loki", iconType: "si", iconName: "SiPrometheus", color: "text-gray-500" }
    ]
  },
  {
    name: "Testing",
    icon: "T",
    items: [
      { name: "Pytest", description: "Unit and integration testing", iconType: "si", iconName: "SiPython", color: "text-green-500" },
      { name: "Katalon", description: "End-to-end automation", icon: "K" }
    ]
  }
];

export default { categories };
