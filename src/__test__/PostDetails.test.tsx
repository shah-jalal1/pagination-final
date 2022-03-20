import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import PostDetails from './../components/PostDetails';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from "history";

describe("details componenet", () => {
  test("post detailas component", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PostDetails />
      </Router>
    );
    const linkElement = screen.getByTestId("detailsPost");
    expect(linkElement).toBeInTheDocument();
  });

  test('Render Post Details by Data', async () => {

    const history = createMemoryHistory();
    history.push("/post-details/1", {
      title: "Builders",
      url: "https://fast.com/",
      created_at: Date(),
      author: "zamil"
    });

    render(
      <Router history={history}>
        {/* <Details/> */}
        <Switch>
          <Route exact component={PostDetails} />
          <Route path="/post-details/1" render={() => <div>created</div>} />
        </Switch>
      </Router>
    );
    const details = screen.getByTestId("detailsPost");
    expect(details).toBeInTheDocument();

  });

});