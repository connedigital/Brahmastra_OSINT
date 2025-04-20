import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CategorySection from "./components/CategorySection";
import { tools } from "./data/tools";
import { categories } from "./data/categories";
import useDarkMode from "./hooks/useDarkMode";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredTools, setFilteredTools] = useState(tools);
    const [darkMode, toggleDarkMode] = useDarkMode();

    // Filter tools based on search query
    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredTools(tools);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = tools.filter(
            (tool) =>
                tool.name.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query) ||
                tool.tags.some((tag) => tag.toLowerCase().includes(query))
        );

        setFilteredTools(filtered);
    }, [searchQuery]);

    // Handle search
    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    // Get tools by category
    const getToolsByCategory = (categoryId: string) => {
        return filteredTools.filter((tool) => tool.category === categoryId);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="container mx-auto px-4 pt-28 pb-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">BRAHMĀSTRA</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A curated collection of open source intelligence tools
                        and resources for investigators, researchers, and
                        cybersecurity professionals.
                    </p>
                </div>

                <div className="mb-16">
                    <SearchBar onSearch={handleSearch} />
                </div>

                {searchQuery && filteredTools.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            No tools found matching "{searchQuery}"
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Clear search
                        </button>
                    </div>
                ) : (
                    categories.map((category) => {
                        const categoryTools = getToolsByCategory(category.id);
                        if (searchQuery && categoryTools.length === 0)
                            return null;

                        return (
                            <CategorySection
                                key={category.id}
                                category={category}
                                tools={categoryTools}
                            />
                        );
                    })
                )}
            </main>

            <Footer />
        </div>
    );
}

export default App;
