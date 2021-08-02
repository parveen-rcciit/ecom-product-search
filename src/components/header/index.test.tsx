import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

describe("Footer component", () => {
  test("renders Footer successfully", () => {
    const { unmount } = render(
      <Header handleSubmit={jest.fn()} setSearchQuery={jest.fn()} />
    );
    unmount();
  });
});
