import { useState } from 'react';
import { FaReact, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import {
  SiHaskell, SiPurescript, SiKubernetes, SiJenkins,
  SiGooglecloud, SiNixos, SiPython, SiJavascript,
  SiPostgresql, SiPrometheus, SiGrafana
} from 'react-icons/si';
import {
  CpuChipIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  CircleStackIcon,
  CloudIcon,
  ChartBarIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import categoriesData from '../data/toolkit.js';

const techIconMap = {
  FaReact, FaJava, FaDocker, FaAws,
  SiHaskell, SiPurescript, SiKubernetes, SiJenkins,
  SiGooglecloud, SiNixos, SiPython, SiJavascript,
  SiPostgresql, SiPrometheus, SiGrafana
};

const categoryIconMap = {
  CpuChipIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  CircleStackIcon,
  CloudIcon,
  ChartBarIcon,
  BeakerIcon
};

function getTechIcon(item) {
  if (item.iconType === 'fa' || item.iconType === 'si') {
    const IconComponent = techIconMap[item.iconName];
    if (IconComponent) {
      return <IconComponent className={`text-${item.color}`} />;
    }
  }
  return <span className="font-bold text-xl">{item.icon}</span>;
}

function getCategoryIcon(cat) {
  if (cat.iconType === 'hero') {
    const IconComponent = categoryIconMap[cat.iconName];
    if (IconComponent) {
      return <IconComponent className="h-5 w-5 flex-shrink-0" />;
    }
  }
  return <span className="font-bold">{cat.icon}</span>;
}

export default function ToolkitTabs() {
  const { categories } = categoriesData;
  const [selected, setSelected] = useState(categories[0]?.name || '');
  
  const selectedCategory = categories.find(c => c.name === selected);

  return (
    <section id="toolkit" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
        Technical Toolkit
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 pb-4 pt-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelected(cat.name)}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full transition-all whitespace-nowrap font-medium border ${
              selected === cat.name
                ? 'bg-primary text-primary-content shadow-lg border-primary'
                : 'bg-base-200 text-base-content hover:bg-base-300 border-base-300'
            }`}
          >
            {getCategoryIcon(cat)}
            <span className="leading-none">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Tech Items Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-base-200 rounded-2xl shadow-inner border border-base-300">
          {selectedCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start space-x-4 p-5 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-base-300"
            >
              <div className="text-2xl shrink-0">
                {getTechIcon(item)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-primary">
                  {item.name}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
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
