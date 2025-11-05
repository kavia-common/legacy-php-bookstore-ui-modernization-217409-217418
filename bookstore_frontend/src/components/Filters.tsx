import React from 'react';

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (c: string) => void;
  maxPrice: number;
  selectedMaxPrice: number;
  onPriceChange: (v: number) => void;
  minRating: number;
  selectedMinRating: number;
  onRatingChange: (v: number) => void;
};

const Filters: React.FC<Props> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  maxPrice,
  selectedMaxPrice,
  onPriceChange,
  minRating,
  selectedMinRating,
  onRatingChange
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title mb-3">Filters</h6>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">All</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="priceRange" className="form-label">Max Price: ${selectedMaxPrice.toFixed(2)}</label>
          <input
            id="priceRange"
            type="range"
            className="form-range"
            min={0}
            max={maxPrice}
            step={1}
            value={selectedMaxPrice}
            onChange={(e) => onPriceChange(Number(e.target.value))}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="rating" className="form-label">Min Rating: {selectedMinRating}+</label>
          <input
            id="rating"
            type="range"
            className="form-range"
            min={minRating}
            max={5}
            step={1}
            value={selectedMinRating}
            onChange={(e) => onRatingChange(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
