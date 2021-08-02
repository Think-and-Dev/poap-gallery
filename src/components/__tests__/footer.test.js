import {render, screen} from "@testing-library/react";
import Footer from "../footer"
import "@testing-library/jest-dom";

it('The "Supported on Celo" logo is shown', () => {
  render(Footer);

  const supportedOnCeloLogo = screen.getByAltText("Supported on Celo");

  expect(supportedOnCeloLogo).toBeInTheDocument();
})