import { render, screen } from "@testing-library/react";
import { Projects, checkInvalid } from "../Projects";

test("Check Null", async () => {
  const nullProps = null;
  expect(checkInvalid(nullProps)).toBe(true);
});

test("Check Undefined", async () => {
  expect(checkInvalid()).toBe(true);
});

test("Check Empty String", async () => {
  expect(checkInvalid("")).toBe(true);
});
test("Check Valid String", async () => {
  expect(checkInvalid("git")).toBe(false);
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
