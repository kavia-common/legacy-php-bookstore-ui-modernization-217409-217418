import React from 'react';

type Props = {
  current: number;
  totalPages: number;
  onPage: (p: number) => void;
};

const Pagination: React.FC<Props> = ({ current, totalPages, onPage }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Catalog pagination">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${current === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPage(current - 1)} aria-label="Previous">«</button>
        </li>
        {pages.map(p => (
          <li key={p} className={`page-item ${p === current ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPage(p)}>{p}</button>
          </li>
        ))}
        <li className={`page-item ${current === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPage(current + 1)} aria-label="Next">»</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
