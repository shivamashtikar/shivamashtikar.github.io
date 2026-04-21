import { useState } from 'react';
import { FaReact, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { 
  SiHaskell, SiPurescript, SiKubernetes, SiJenkins, 
  SiGooglecloud, SiNixos, SiPython, SiJavascript, 
  SiPostgresql, SiPrometheus, SiGrafana 
} from 'react-icons/si';
import categoriesData from '../data/toolkit.js';

const iconMap = {
  FaReact, FaJava, FaDocker, FaAws,
  SiHaskell, SiPurescript, SiKubernetes, SiJenkins,
  SiGooglecloud, SiNixos, SiPython, SiJavascript,
  SiPostgresql, SiPrometheus, SiGrafana
};

function getIcon(item) {
  if (item.iconType === 'fa' || item.iconType === 'si') {
    const IconComponent = iconMap[item.iconName];
    if (IconComponent) {
      return <IconComponent className={`text-${item.color}`} />;
    }
  }
  return <span className="font-bold text-xl">{item.icon}</span>;
}

export default function ToolkitTabs() {
  const { categories } = categoriesData;
  const [selected, setSelected] = useState(categories[0]?.name || '');
  
  const selectedCategory = categories.find(c => c.name === selected);

  return (
    <section id="toolkit" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-gray-100">
        Technical Toolkit
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelected(cat.name)}
            className={`flex items-center space-x-2 px-5 py-3 rounded-full transition-all whitespace-nowrap font-medium ${
              selected === cat.name 
                ? 'bg-blue-600 text-white shadow-lg scale-105' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="font-bold">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Tech Items Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-inner">
          {selectedCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start space-x-4 p-5 bg-white/80 dark:bg-gray-700/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
            >
              <div className="text-2xl shrink-0">
                {getIcon(item)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-blue-700 dark:text-blue-400">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
