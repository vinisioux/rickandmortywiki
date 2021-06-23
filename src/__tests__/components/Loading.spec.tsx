import { render } from "@testing-library/react";
import { Loading } from "../../components/Loading";

describe("Loading Component", () => {
  it("renders correctly", async () => {
    const { getByTestId } = render(
      <Loading color="#000" size={30} isLoading={true} />
    );

    expect(getByTestId("spinner-icon")).toBeInTheDocument();
  });
});
