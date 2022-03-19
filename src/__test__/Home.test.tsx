import React from "react";
import { render, screen } from '@testing-library/react';
import HomePage from "../components/HomePage";
import { getAllData } from './../AllApi/dataApi';

describe("Home", ()=> {
    
    test("api data", async () => {
        return await getAllData(0).then((data) => {
          expect(data).toBeDefined();
        });
      });

    test("Home componenet", ()=> {
        render(<HomePage />)
        const element = screen.getByTestId("homePage");
        expect(element).toBeInTheDocument();
    })

   
})