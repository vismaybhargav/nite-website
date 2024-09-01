import { render, screen } from '@testing-library/react';
import App from './App';
import Color from "./util/Color"
import exp from 'constants';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('Color.toHex() returns the correct string', () => {
  const black = new Color(0, 0, 0).toHex();
  expect(black).toBe("#000000");

  const white = new Color(255, 255, 255).toHex();
  expect(white).toBe("#FFFFFF");

  const randomYellow = new Color(252, 186, 3).toHex();
  expect(randomYellow).toBe("#FCBA03");

  const withTransperancy = new Color(252, 186, 3, 0.5).toHexWithAlpha();
  expect(withTransperancy).toBe("#FCBA0380");
});
