import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import HomeScreen from "./HomeScreen";


test('Displays a heading', () => {
  render(<HomeScreen />);
  const heading = screen.getByRole('button', { 
    name: /Calculate/i 
  });
  expect(heading).toBeInTheDocument();
});