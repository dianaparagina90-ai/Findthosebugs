import { cleanup, render, screen } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import userEvent from "@testing-library/user-event";

describe("TodoForm component", () => {
  afterEach(() => {
    cleanup();
  });

  it("empty input values should not be added to the list", async () => {
    //Arrange
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<TodoForm onAdd={onAdd} />);

    //Act
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    //Assert
    expect(onAdd).not.toHaveBeenCalled();
  });
});
