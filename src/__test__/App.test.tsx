import react from "react";
import { render, screen } from '@testing-library/react';
import App from './../App';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("app", () => {
    test('Render app component', () => {
        render(<App/>);
        const app = screen.getByTestId("app");
        expect(app).toBeInTheDocument();
    });

    test("details page", () => {
        const history = createMemoryHistory({ initialEntries: ["/post-details"] });
        render(
          <Router history={history}>
            <App />
          </Router>
        );
    
        expect(history.location.pathname).toBe("/post-details");
      });
})