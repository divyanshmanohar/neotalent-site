import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* === INDUSTRY LIST === */
/* === INDUSTRY LIST === */
.industry-list {
  margin: 2rem 0;
}

.industry-list h3 {
  color: #1e40af;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.industry-list ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  text-align: left;
  max-width: 600px;
  margin: auto;
}

.industry-list li {
  margin-bottom: 0.8rem;
  color: #374151;
  font-size: 1.1rem;
}

/* === SERVICES INSIDE ABOUT (IMPROVED) === */
.services-grid {
  margin: 4rem 0 2rem;
}

.services-grid h3 {
  font-size: 1.8rem;
  color: #1e40af;
  margin-bottom: 2.5rem;
}

.services-inner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always 2 columns */
  gap: 30px;
  justify-items: center;
}

.service-item {
  background: linear-gradient(to bottom right, #f9fafb, #e0e7ff); /* Light soft gradient */
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.service-icon {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #4f46e5;
}

.service-item h4 {
  color: #4f46e5;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-item p {
  font-size: 1rem;
  color: #374151;
}
