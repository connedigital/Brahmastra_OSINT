import React from 'react';
import ToolCard from './ToolCard';
import { Tool, Category } from '../types';
import * as LucideIcons from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  tools: Tool[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, tools }) => {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons as any)[
    category.icon.charAt(0).toUpperCase() + category.icon.slice(1)
  ];
  
  return (
    <section id={category.id} className="pt-16 pb-10">
      <div className="flex items-center mb-6">
        {IconComponent && (
          <IconComponent className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
        )}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {category.name}
        </h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {category.description}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.length > 0 ? (
          tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)
        ) : (
          <p className="text-gray-500 dark:text-gray-400 col-span-full">
            No tools found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default CategorySection;