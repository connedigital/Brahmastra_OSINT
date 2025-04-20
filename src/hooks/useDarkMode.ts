import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Check if user has a system preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on localStorage or system preference
    setDarkMode(isDarkMode ?? prefersDarkMode);
    
    // Apply the appropriate class to the document
    if (isDarkMode || prefersDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      
      // Save preference to localStorage
      localStorage.setItem('darkMode', String(newMode));
      
      // Toggle the dark class on the document
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;