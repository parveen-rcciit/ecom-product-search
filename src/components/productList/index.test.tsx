import React from "react";
import { render } from "@testing-library/react";
import ProductList from "./index";

describe("Footer component", () => {
  test("renders Footer successfully", () => {
    const { unmount } = render(<ProductList productList={[]} />);
    unmount();
  });
});
