import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const Searchbar = ({ items = [], onSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Filter items based on query
  const filteredItems = items.filter(item => {
    const searchText = typeof item === 'string' ? item : item.name || item.title || '';
    return searchText.toLowerCase().includes(query.toLowerCase());
  });

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredItems.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredItems.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && filteredItems[selectedIndex]) {
            handleSelect(filteredItems[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          setSelectedIndex(-1);
          searchRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length > 0);
    setSelectedIndex(-1);
  };

  const handleSelect = (item) => {
    const selectedText = typeof item === 'string' ? item : item.name || item.title || '';
    setQuery(selectedText);
    setIsOpen(false);
    setSelectedIndex(-1);
    onSelect?.(item);
    
    // Navigate to the item's href if it exists
    if (item.href) {
      window.location.href = item.href;
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
    searchRef.current?.focus();
  };

const highlightMatch = (text, query) => {
  if (!query) return text;

  const regex = new RegExp(`\\b(${query})`, 'i'); // Match only at word-start
  const match = text.match(regex);

  if (!match) return text;

  const start = match.index;
  const end = start + match[0].length;

  return (
    <>
      {text.slice(0, start)}
      <span className="bg-green-100 text-green-800 font-semibold">
        {text.slice(start, end)}
      </span>
      {text.slice(end)}
    </>
  );
};


  return (
    <div className="relative left-10 w-full max-w-sm mx-auto" ref={searchRef}>
      {/* Search Input */}
      <div className=" group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors duration-200" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder="Search . . ."
          className="w-full pl-10 pr-0 2xl:pr-10 py-2 bg-white border-2 border-gray-300 rounded-xl
                   focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none
                   transition-all duration-200 text-gray-700 placeholder-gray-400 text-sm
                   hover:shadow-lg"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-[60] max-h-48 overflow-y-auto"
        >
          {filteredItems.length > 0 ? (
            <div className="py-2">
              {filteredItems.map((item, index) => {
                const displayText = typeof item === 'string' ? item : item.name || item.title || '';
                const isSelected = index === selectedIndex;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left px-4 py-3 transition-all duration-150 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700 ${
                      isSelected ? 'bg-green-50 text-green-700' : 'text-gray-700'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <div className="flex items-center space-x-3">
                      <Search className="h-4 w-4 text-gray-400  flex-shrink-0" />
                      <span className="truncate text-lg">
                        {highlightMatch(displayText, query)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Example usage component
const SearchbarDemo = () => {

const departments = [
  { name: "Anesthesiology", href: "/anesthesiology" },
  { name: "Cardiac Surgery", href: "/cardiac-surgery" },
  { name: "Cardiology", href: "/cardiology" },
  { name: "Critical Care", href: "/critical-care" },
  { name: "General Surgery", href: "/general-surgery" },
  { name: "Nephrology", href: "/nephrology" },
  { name: "Neurosurgery", href: "/neurosurgery" },
  { name: "Ophthalmology", href: "/ophthalmology" },
  { name: "Orthopedic", href: "/orthopedic" },
  { name: "Plastic Surgery", href: "/plastic-surgery" },
  { name: "Pulmonology", href: "/pulmonology" },
];

  const handleSelect = (item) => {
    console.log('Selected:', item);
    // Handle navigation or other actions here
  };

  return (
   
      <div className="mx-auto">
       
            <Searchbar 
              items={departments} 
              onSelect={handleSelect}
              placeholder="Search departments..."
            />

        {/* Features */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Keyboard navigation (↑↓ arrows, Enter, Escape)</li>
              <li>• Click outside to close</li>
              <li>• Search highlighting</li>
              <li>• Smooth animations</li>
              <li>• Mobile-friendly</li>
              <li>• Customizable styling</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Props</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">items</code> - Array of searchable items</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">placeholder</code> - Input placeholder text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onSelect</code> - Callback when item selected</li>
            </ul>
          </div>
        </div> */}
      </div>
  );
};

export default SearchbarDemo;