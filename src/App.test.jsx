import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from './App';

test("Button has the correct initial color", async () => {
  render(<App />);
  // Find an element with a role of button and text of 'Change to blue'
  const colorButton = await screen.findByRole("button", { name: "Change to Midnight Blue" });

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
});

test("Button turns blue when clicked", async () => {
  render(<App />);

  const colorButton = await screen.findByRole("button", { name: "Change to Midnight Blue" });

    // Expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'Midnight Blue'})
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red")
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();

  // Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables on checked and enables on unchecked", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });


  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

})

test("Disabled button turns grey", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  // Should turn grey
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'grey'})

  // Should turn red
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  // Should turn blue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  // Should turn grey
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'grey'})

  // should turn blue
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})

  // Should turn red
  fireEvent.click(colorButton);
  expect(checkbox).not.toBeChecked(); 
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'grey'})
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
