import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import { vitest } from "vitest";
import userEvent from "@testing-library/user-event";

describe("JSX Practice exercises", () => {
  describe("JSX basics", () => {
    /**
     * Implement the `HelloWorld` component
     * such that it says "Hello, John Doe!"
     *
     * Read the value from the `name` variable
     */
    it("hello john doe", () => {
      const name = "John Doe";

      const HelloWorld = ({ name }) => <p>Hello, {name}</p>;

      render(<HelloWorld name={name} />);
      expect(screen.getByText(/Hello, John Doe/)).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component such that
     * it renders an image
     *
     * Read the image path from the `imagePath` variable
     */
    it("profile image 1", () => {
      const imagePath = "https://placekitten.com/200/300";

      const ProfileImage = ({ avatar_url }) => <img src={avatar_url} />;

      render(<ProfileImage avatar_url={imagePath} />);
      expect(screen.getByRole("img")).toHaveAttribute("src", imagePath);
    });

    /**
     * Implement the `ProfileImage` component
     * such that it renders the given HTML
     */
    it("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;

      const ProfileImage = () => (
        <img
          src="https://placekitten.com/200/300"
          style={{ border: "1px solid blue" }}
        />
      )

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border: 1px solid blue;"
      );
    });

    /**
     * Implement the `Avatar` component such that
     * it displays the name and image of a character.
     *
     * Read the details from the `character` variable.
     * Display the name inside a heading HTML tag.
     */
    it("avatar", () => {
      const character = {
        name: "John Doe",
        image: "https://placekitten.com/200/300",
      };

      const Avatar = ({ character }) => {
        return (
          <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
          </div>
        );
      };

      render(<Avatar character={character} />);
      expect(screen.getByRole("heading")).toHaveTextContent(character.name);
      expect(screen.getByRole("img")).toHaveAccessibleName(character.name);
      expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
    });
  });

  describe("JSX expressions", () => {
    /**
     * Update the `ProductPrice` component
     * such that the value of the price is displayed
     * with two decimals
     */
    it("format number", () => {
      const price = 12;

      const ProductPrice = ({ price }) => {
        return <p>Price: {price}</p>;
      };

      render(<ProductPrice price={price.toFixed(2)} />);
      expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
    });

    /**
     * Update the `HelloReact` component
     * so that it outputs "React was launched on a Wednesday"
     *
     * Tip: You can use the `Intl.DateTimeFormat` helper,
     * passing in just the `weekday` option
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     */
    it("format date - day of week", () => {
      // Date react was launched: May 29, 2013
      const reactLaunchDate = new Date("2013-05-29");

      const formatDate = (date) => new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
      const HelloWorld = () => {
        return <p>React was launched on a {formatDate(reactLaunchDate)}</p>;
      };

      render(<HelloWorld />);
      expect(
        screen.getByText(/React was launched on a Wednesday/)
      ).toBeInTheDocument();
    });
  });

  describe("HTML to JSX", () => {
    /**
     * Implement the `LearnReactSection` component
     * such that it returns the given HTML
     */
    it("learn react section", () => {
      const html = `
          <div>
              <h1>Learn React</h1>
              <ul>
                  <li>Describing the UI
                  <li>Adding interactivity
                  <li>Managing state
              </ul>
          </div>
  `;

      const LearnReactSection = () => (
        <div>
          <h1>Learn React</h1>
          <ul>
            <li>Describing the UI</li>
            <li>Adding interactivity</li>
            <li>Managing state</li>
          </ul>
        </div>
      );

      render(<LearnReactSection />);
      expect(screen.getByRole("heading")).toHaveTextContent(/Learn React/);
      expect(screen.getByRole("list")).toHaveTextContent(
        "Describing the UIAdding interactivityManaging state"
      );
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     */
    it("john doe profile 1", () => {
      const html = `
      <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300">
      </div>
  `;

  const Profile = () => (
    <div>
      <h1>John Doe</h1>
      <img src="https://placekitten.com/200/300" />
    </div>
  );

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     */
    it("john doe profile 2", () => {
      const html = `
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300"/>
      `;
      const Profile = () => (
        <>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300" />
        </>
      );

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    it("profile image 1", () => {
      const html = `<img src="https://placekitten.com/200/300" class="photo" />`;

      const ProfileImage = () => (
        <img src="https://placekitten.com/200/300" className="photo" />
      );

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute("class", "photo");
    });

    /**
     * Implement the `CustomerCard` component
     * such that it returns the given HTML
     */
    it("customer card", () => {
      const html = `<section data-testid="blueberry"><h1>BlueBerry INC</h1></section>`;

      const CustomerCard = () => (
        <section data-testid="blueberry">
          <h1>BlueBerry INC</h1>
        </section>
      );

      render(<CustomerCard />);
      expect(screen.getByTestId("blueberry")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    it("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border-color: red;" />`;


      const ProfileImage = () => (
        <img
          src="https://placekitten.com/200/300"
          style={{ borderColor: "red" }}
        />
      );

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border-color: red;"
      );
    });
  });
});