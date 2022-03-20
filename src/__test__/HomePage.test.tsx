import React from "react";
import { render, screen } from '@testing-library/react';
import HomePage from "../components/HomePage";
import { getAllData } from './../AllApi/dataApi';
import axios  from 'axios';

describe("Home", () => {

  beforeEach(async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: {
        hits: [
          {
            created_at: "2022-02-12T12:10:12.000Z",
            title: "Can GPT-3 AI write comedy?",
            url: "https://robmanuelfuckyeah.substack.com/p/someone-needs-to-stop-me-playing",
            author: "zamil",
            created_at_i: 1644667812,
            objectID: "30312182",
          },
        ],
      },
    });
  });

  test("api data", async () => {
    return await getAllData(0).then((data) => {
      expect(data).toBeDefined();
    });
  });

    test('api test', async()=> {
    const data = await getAllData(1);
    expect(data).toBeDefined()
});

  test("if pagination exist should check", () => {
    render(<HomePage />)
    const element = screen.getByTestId("homePage");
    expect(element).toBeInTheDocument();
  })

  test("is loading working", () => {
    render(<HomePage />)
    const element = screen.getByTestId("loading");
    expect(element).toBeInTheDocument();
  })

  test("loading text", () => {
    render(<HomePage />)
    const element = screen.getByTestId("loadingText");
    expect(element).toBeInTheDocument();
  })


  test("Home componenet", () => {
    render(<HomePage />)
    const element = screen.getByTestId("homePage");
    expect(element).toBeInTheDocument();
  })


})



// import React from "react";
// import { render, screen } from '@testing-library/react';
// import HomePage from "../components/HomePage";
// import { getAllData } from './../AllApi/dataApi';


// describe("Home", () => {


//   // test("api data", async () => {
//   //   return await getAllData(0).then((data) => {
//   //     expect(data).toBeDefined();
//   //   });
//   // });

//   test('api test', async()=> {
//     const data = await getAllData(1);
//     expect(data).toBeDefined()
// });

//   test("if pagination exist should check", () => {
//     render(<HomePage />)
//     const element = screen.getByTestId("homePage");
//     expect(element).toBeInTheDocument();
//   })

//   test("is loading working", () => {
//     render(<HomePage />)
//     const element = screen.getByTestId("loading");
//     expect(element).toBeInTheDocument();
//   })

//   test("loading text", () => {
//     render(<HomePage />)
//     const element = screen.getByTestId("loadingText");
//     expect(element).toBeInTheDocument();
//   })


//   test("Home componenet", () => {
//     render(<HomePage />)
//     const element = screen.getByTestId("homePage");
//     expect(element).toBeInTheDocument();
//   })


// })