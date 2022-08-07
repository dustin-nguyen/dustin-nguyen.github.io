import { Icon } from "@iconify/react";
import { render, screen } from "@testing-library/react";
import {
  Projects,
  checkInvalid,
  RenderDemoButton,
  RenderGitHubButton,
  RenderProjectButton,
  RenderGitHubIcon,
} from "../Projects";

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
test("Render Valid Link in Demo Button", async () => {
  const demo = "https://www.google.com";
  render(<RenderDemoButton demo={demo} />);
  expect(screen.getByText("TRY IT NOW")).toBeInTheDocument();
});
test("Render Empty Link in Demo Button", async () => {
  const demo = "";
  render(<RenderDemoButton demo={demo} />);
  expect(screen.getByText("No Demo Link")).toBeInTheDocument();
});
test("Render Valid Link in Github Button", async () => {
  const link = "https://www.google.com";
  render(<RenderGitHubButton github={link} />);
  expect(screen.getByText("GitHub Link")).toBeInTheDocument();
});
test("Render Empty Link in Github Button", async () => {
  const link = "";
  render(<RenderGitHubButton github={link} />);
  expect(screen.getByText("No GitHub Link")).toBeInTheDocument();
});
test("Render Project Button with Github Link", async () => {
  const link = "https://www.google.com/";
  render(<RenderProjectButton github={link} />);
  expect(screen.getByText("GitHub Link")).toBeInTheDocument();
  const linkElement = screen.getByRole("link");
  expect(linkElement.href).toBe(link);
});
test("Render Project Button with Demo Link", async () => {
  const link = "https://www.google.com/";
  render(<RenderProjectButton demo={link} />);
  expect(screen.getByText("TRY IT NOW")).toBeInTheDocument();
  const linkElement = screen.getByRole("link");
  expect(linkElement.href).toBe(link);
});
test("Render Project Button with Empty StringLink", async () => {
  render(<RenderProjectButton />);
  expect(screen.getByText("No Link")).toBeInTheDocument();
});
test("Render Project Button with Null Link", async () => {
  render(<RenderProjectButton demo={null} />);
  expect(screen.getByText("No Link")).toBeInTheDocument();
}, 10000);
test("Render Project Button with Undefined Link", async () => {
  render(<RenderProjectButton demo={undefined} />);
  expect(screen.getByText("No Link")).toBeInTheDocument();
}, 10000);
test("Render GitHub Icon", async () => {
  const link = "https://www.github.com/";
  render(<RenderGitHubIcon github={link} />);
  expect(screen.getByRole("link").href).toBe(link);
}, 10000);
