import React from "react";
import { Router } from 'react-router-dom';
import PostDetails from './../components/PostDetails';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from "history";

describe("details componenet", () => {
    test("post details", () => {
        const history = createMemoryHistory();
        render(
          <Router history={history}>
            <PostDetails />
          </Router>
        );
        const linkElement = screen.getByTestId("detailsPost");
        expect(linkElement).toBeInTheDocument();
});

});