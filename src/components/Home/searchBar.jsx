import { useState } from "react";

const SearchBar = ({ cardData, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    const filteredData = cardData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    onSearch(filteredData);
  };
  return (
    <div className="search-bar">
      <form className="search">
        <input
          type="text"
          className="search_input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18"
          viewBox="0 0 24 24"
          className="search_icon"
        >
          <path
            d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
          />
        </svg>
      </form>
    </div>
  );
};

export default SearchBar
