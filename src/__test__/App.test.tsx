import React from "react";
import {render, screen} from '@testing-library/react';
import App from './../App';
import {MemoryRouter, Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe("app", () => {


    test('Render app component', () => {
        render(<App/>);
        const app = screen.getByTestId("app");
        expect(app).toBeInTheDocument();
    });

    test("details page route test", () => {
        const history = createMemoryHistory({initialEntries: ["/post-details/1"]});
        render(
            <Router history={history}>
                <App/>
            </Router>
        );

        expect(history.location.pathname).toBe("/post-details/1");
    });

    test("home page route test", () => {
        const history = createMemoryHistory({initialEntries: ["/"]});
        render(
            <Router history={history}>
                <App/>
            </Router>
        );

        expect(history.location.pathname).toBe("/");
    });


    test("If Router No Match", () => {
        const history = createMemoryHistory({
            initialEntries: ["/route/no/match"],
        });
        render(
            <Router history={history}>
                <App />
            </Router>
        );

        expect(history.location.pathname).toBe("/route/no/match");
    });


})
