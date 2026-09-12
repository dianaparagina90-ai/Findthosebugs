import { render } from "@testing-library/react";
import Post from "../components/Post";

describe("Post component", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("check that correctly post is been fetched", async () => {
    //Arrange
    vi.mocked(globalThis.fetch).mockResolvedValue({
      json: async () => ({}),
    } as Response);

    //Act
    render(<Post id={3} />);

    //Assert
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/3",
    );
  });
});
