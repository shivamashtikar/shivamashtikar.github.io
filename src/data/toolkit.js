export const categories = [
  {
    name: "AI & Machine Learning",
    iconType: "hero",
    iconName: "SparklesIcon",
    isFeatured: true,
    items: [
      { name: "vLLM", description: "High-throughput LLM serving inference engine", icon: "v" },
      { name: "SGLang", description: "Structured generation for LLMs", icon: "S" },
      { name: "LiteLLM", description: "Unified LLM proxy (700+ users)", icon: "L" },
      { name: "LMCache", description: "KV cache optimization", icon: "K" },
      { name: "VespaDB", description: "Vector database for RAG systems", icon: "V" },
      { name: "Ollama", description: "Local LLM deployment", icon: "O" }
    ]
  },
  {
    name: "GPU & Infrastructure",
    iconType: "hero",
    iconName: "ServerIcon",
    items: [
      { name: "H200 Clusters", description: "8x GPU node management", icon: "H" },
      { name: "AWS", description: "Cloud infrastructure", iconType: "fa", iconName: "FaAws", color: "text-[#61afef]" },
      { name: "GCP", description: "Vertex AI integration", iconType: "si", iconName: "SiGooglecloud", color: "text-[#61afef]" },
      { name: "Kubernetes", description: "Container orchestration", iconType: "si", iconName: "SiKubernetes", color: "text-[#61afef]" },
      { name: "Docker", description: "Containerization", iconType: "fa", iconName: "FaDocker", color: "text-[#61afef]" },
      { name: "Ray", description: "Distributed computing", icon: "R" }
    ]
  },
  {
    name: "Languages",
    iconType: "hero",
    iconName: "CodeBracketIcon",
    items: [
      { name: "Haskell", description: "Functional programming, type safety", iconType: "si", iconName: "SiHaskell", color: "text-[#c678dd]" },
      { name: "PureScript", description: "Strongly-typed functional frontend", iconType: "si", iconName: "SiPurescript", color: "text-[#c678dd]" },
      { name: "Python", description: "ML tooling, automation", iconType: "si", iconName: "SiPython", color: "text-[#e5c07b]" },
      { name: "TypeScript", description: "Type-safe JavaScript", iconType: "si", iconName: "SiTypescript", color: "text-[#61afef]" },
      { name: "ReScript", description: "OCaml-based frontend", iconType: "si", iconName: "SiRescript", color: "text-[#e06c75]" },
      { name: "Java", description: "Backend, Android", iconType: "fa", iconName: "FaJava", color: "text-[#e5c07b]" }
    ]
  },
  {
    name: "Observability",
    iconType: "hero",
    iconName: "EyeIcon",
    items: [
      { name: "Prometheus", description: "Metrics collection", iconType: "si", iconName: "SiPrometheus", color: "text-[#e5c07b]" },
      { name: "Grafana", description: "Visualization dashboards", iconType: "si", iconName: "SiGrafana", color: "text-[#e5c07b]" },
      { name: "Loki", description: "Log aggregation", iconType: "si", iconName: "SiGrafana", color: "text-[#e06c75]" },
      { name: "Promtail", description: "Log shipping agent", iconType: "si", iconName: "SiPrometheus", color: "text-[#5c6370]" }
    ]
  },
  {
    name: "Frameworks",
    iconType: "hero",
    iconName: "Squares2X2Icon",
    items: [
      { name: "React", description: "Modern UI development", iconType: "fa", iconName: "FaReact", color: "text-[#56b6c2]" },
      { name: "Presto", description: "Cross-platform PureScript", iconType: "si", iconName: "SiHaskell", color: "text-[#c678dd]" },
      { name: "Streamly", description: "Haskell streaming", icon: "S" },
      { name: "Android Native", description: "Mobile development", iconType: "si", iconName: "SiAndroid", color: "text-[#98c379]" }
    ]
  },
  {
    name: "Data & Storage",
    iconType: "hero",
    iconName: "CircleStackIcon",
    items: [
      { name: "PostgreSQL", description: "Relational database", iconType: "si", iconName: "SiPostgresql", color: "text-[#61afef]" },
      { name: "Vespa", description: "Vector search engine", icon: "V" }
    ]
  }
];

export default { categories };
