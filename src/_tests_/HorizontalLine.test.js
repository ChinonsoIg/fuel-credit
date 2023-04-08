import jest from "jest";
import { render } from "@testing-library/jest-dom";
import HorizontalLine from "../components/HorizontalLine";

describe('HorizontalLine', () => {
  it('renders HorizontalLine component', () => {
    render(<HorizontalLine />);
  });
});