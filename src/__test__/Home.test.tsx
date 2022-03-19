import React from "react";
import { render, screen } from '@testing-library/react';
import HomePage from "../components/HomePage";

describe("Home", ()=> {
    test("Home componenet", ()=> {
        render(<HomePage />)
        const element = screen.getByTestId("homePage");
        expect(element).toBeInTheDocument();
    })
})