import React, { useMemo, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { sampleBooks } from '../data/sampleBooks';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';

// PUBLIC_INTERFACE
export default function Catalog(): JSX.Element {
  /**
   * Displays a list of books with simple client-side filtering.
   * Uses local sample data; no API calls.
   */
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(sampleBooks.map((b) => b.category)))],
    []
  );

  const filtered = useMemo(() => {
    return sampleBooks.filter((b) => {
      const matchesQuery =
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase());
      const matchesCat = category === 'All' || b.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  return (
    <Row className="g-4">
      <Col md={3}>
        <Filters>
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="search"
              placeholder="Title or author"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Filters>
      </Col>
      <Col md={9}>
        <ProductList items={filtered} />
      </Col>
    </Row>
  );
}
