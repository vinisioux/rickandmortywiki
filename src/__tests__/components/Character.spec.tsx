import { fireEvent, render } from "@testing-library/react";
import { Character } from "../../components/Character";

const mockedHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe("Character Component", () => {
  it("renders correctly", () => {
    const { getByAltText, getByText } = render(
      <Character
        id={123123}
        image="https://avatars.githubusercontent.com/u/36283335?v=4"
        name="Vinicius"
      />
    );

    expect(getByAltText("Vinicius")).toBeInTheDocument();
    expect(getByText("Vinicius")).toBeInTheDocument();
  });

  it("go to character page when click on the image", () => {
    const { getByAltText } = render(
      <Character
        id={123123}
        image="https://avatars.githubusercontent.com/u/36283335?v=4"
        name="Vinicius"
      />
    );

    const buttonElement = getByAltText("Vinicius");

    fireEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith(`/character/${123123}`);
  });
});
