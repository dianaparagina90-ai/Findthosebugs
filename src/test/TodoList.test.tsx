import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoItem component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Checkbox should toggle when clicked", async () => {
    //Arrange
    const user = userEvent.setup();
    const onToggle = vi.fn();
    const deleteBtn = vi.fn();
    const todos = [
      {
        id: 1,
        text: "Städa",
        completed: false,
      },
    ];

    render(<TodoList todos={todos} onToggle={onToggle} onDelete={deleteBtn} />);
    const checkbox = screen.getByRole("checkbox");

    //Act
    await user.click(checkbox);

    //Assert
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
