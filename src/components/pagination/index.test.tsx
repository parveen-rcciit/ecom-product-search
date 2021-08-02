import React from "react";
import { render } from "@testing-library/react";
import PaginationContainer from "./index";

describe("PaginationContainer component", () => {
  test("renders PaginationContainer successfully", () => {
    const { unmount } = render(
      <PaginationContainer
        currentPage={1}
        totalPageCount={100}
        onPageChange={jest.fn()}
      ></PaginationContainer>
    );
    unmount();
  });
});
