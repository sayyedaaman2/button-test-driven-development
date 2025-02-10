import { describe,it,expect } from "vitest";
import { render,screen } from "@testing-library/react";
import Button from "../components/Button";
import { vitest } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Button component",()=>{
    it("renders a button",()=>{
        render(<Button/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it("allows the user to pass a button test",()=>{
        render(<Button text={"Click me"}/>);
        expect(screen.getByRole("button")).toHaveTextContent("Click me")
    });
    it("allows the user to pass a click handler",async()=>{
        const dummyClickHandler = vitest.fn();
        render(<Button text={"Click me"} onClick={dummyClickHandler}/>)

        const user = userEvent.setup();
        await user.click(screen.getByText(/Click me/));

        expect(dummyClickHandler).toHaveBeenCalled();
    })
})