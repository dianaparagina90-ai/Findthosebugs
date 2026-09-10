import { cleanup, render, screen } from "@testing-library/react";
import TodoStats from "../components/TodoStats";

describe("TodoStats component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Check that remaining todos shows right number", () => {
    //Arrange
    const todos = [
      {
        id: 1,
        text: "Städa",
        completed: false,
      },
    ];
    //Act
    render(<TodoStats todos={todos} />);

    //Assert
    expect(screen.getByText("1 kvar av 1")).toBeInTheDocument();
  });

  it("Check that remaining shows right number if some todos are already completed", () => {
    //Arrange
    const todos = [
      {
        id: 1,
        text: "Städa",
        completed: false,
      },
      {
        id: 2,
        text: "Läsa",
        completed: true,
      },
      {
        id: 3,
        text: "Tvätta",
        completed: true,
      },
    ];
    //Act
    render(<TodoStats todos={todos} />);

    //Assert
    expect(screen.getByText("1 kvar av 3")).toBeInTheDocument();
  });
});
