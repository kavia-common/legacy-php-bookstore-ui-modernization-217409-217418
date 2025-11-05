import React from 'react';

type Props = {
  query: string;
  onChange: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  return (
    <input
      type="search"
      className="form-control"
      placeholder="Search books by title or author..."
      aria-label="Search books"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
