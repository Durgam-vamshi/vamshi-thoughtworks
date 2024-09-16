import React from "react";

interface SearchBarProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  city,
  setCity,
  handleSearch,
}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
