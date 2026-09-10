import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoApp from "../components/TodoApp";
import userEvent from "@testing-library/user-event";

describe("TodoApp component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Check that completed tasks are shown in completed filter", async () => {
    //Arrange
    const user = userEvent.setup();
    render(<TodoApp />);

    // Skapar två låtsade uppgifter som användaren skulle lägga
    const input = screen.getByRole("textbox");
    await user.type(input, "Handla mjölk");
    await user.click(screen.getByRole("button", { name: /lägg till/i }));
    await user.type(input, "Städa");
    await user.click(screen.getByRole("button", { name: /lägg till/i }));

    // Markera "Handla mjölk" som klar
    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);

    //Act
    // Klicka på "Klara"
    await user.click(screen.getByRole("button", { name: "Klara" }));

    //Assert
    expect(screen.getByText("Handla mjölk")).toBeInTheDocument();
    expect(screen.queryByText("Städa")).not.toBeInTheDocument();
  });
});
