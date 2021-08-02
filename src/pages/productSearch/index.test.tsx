import { render, fireEvent, screen } from "@testing-library/react";
import ProductContainer from "./index";
import { headerTitle, mockData } from "../../constants/config";

Object.defineProperty(window, "scrollTo", { value: jest.fn(), writable: true });

jest.mock("../../services/products", () => ({
  __esModule: true,
  default: () => Promise.resolve(mockData),
}));

describe("ProductSearch component", () => {
  test("should render ProductSearch with header successfully", () => {
    render(<ProductContainer />);
    expect(screen.getByText(headerTitle)).toBeInTheDocument();
  });

  test("should render search form and show search results", async () => {
    const { container } = render(<ProductContainer />);
    expect(container.querySelector("form")).toBeInTheDocument();
    const searchInput = screen.getByPlaceholderText("Search Products");
    fireEvent.change(searchInput, { target: { value: "Yoga pants" } });
    fireEvent.submit(screen.getByRole("button"));
    const searchResultText = await screen.findByText(
      "Showing 96 of 161 results"
    );
    expect(searchResultText).toBeInTheDocument();
  });

  test("should fetch products for next page", async () => {
    const { container } = render(<ProductContainer />);
    expect(container.querySelector("form")).toBeInTheDocument();
    const searchInput = screen.getByPlaceholderText("Search Products");
    fireEvent.change(searchInput, { target: { value: "Yoga pants" } });
    fireEvent.submit(screen.getByRole("button"));

    const nextButton = await screen.findByText("Next");
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton.parentElement || nextButton);
    let pageText = await screen.findByText("Page 2 of 5");
    expect(pageText).toBeInTheDocument();

    const lastButton = await screen.findByText("Last");
    expect(lastButton).toBeInTheDocument();
    fireEvent.click(lastButton.parentElement || lastButton);
    pageText = await screen.findByText("Page 5 of 5");
    expect(pageText).toBeInTheDocument();

    const prevButton = await screen.findByText("Previous");
    expect(prevButton).toBeInTheDocument();
    fireEvent.click(prevButton.parentElement || prevButton);
    pageText = await screen.findByText("Page 4 of 5");
    expect(pageText).toBeInTheDocument();

    const firstButton = await screen.findByText("First");
    expect(firstButton).toBeInTheDocument();
    fireEvent.click(firstButton.parentElement || firstButton);
    pageText = await screen.findByText("Page 1 of 5");
    expect(pageText).toBeInTheDocument();
  });
});
