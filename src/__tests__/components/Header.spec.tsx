import { fireEvent, render } from "@testing-library/react";
import { Header } from "../../components/Header";

const mockedHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe("Header Component", () => {
  it("renders correctly", () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText("Rick and Morty Wiki")).toBeInTheDocument();
  });

  it("go to home page when click on the image", () => {
    const { getByAltText } = render(<Header />);

    const buttonElement = getByAltText("Rick and Morty Wiki");

    fireEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith("/");
  });
});
