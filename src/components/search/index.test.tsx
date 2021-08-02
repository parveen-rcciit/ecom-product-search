import React from "react";
import { render } from "@testing-library/react";
import Search from "./index";

describe("Footer component", () => {
  test("renders Footer successfully", () => {
    const { unmount } = render(
      <Search handleSubmit={jest.fn()} setSearchQuery={jest.fn()} />
    );
    unmount();
  });
});
