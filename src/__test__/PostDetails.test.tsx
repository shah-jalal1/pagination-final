import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import PostDetails from './../components/PostDetails';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from "history";

describe("details componenet", () => {
  // test("post details", () => {
  //   const history = createMemoryHistory();
  //   render(
  //     <Router history={history}>
  //       <PostDetails />
  //     </Router>
  //   );
  //   const linkElement = screen.getByTestId("detailsPost");
  //   expect(linkElement).toBeInTheDocument();
  // });

  test('Render details component', async () => {

    const history = createMemoryHistory();
    history.push("/details", {title: "", url: "", created_at: Date(), author: ""});

   render(
        <Router history={history}>
            {/* <Details/> */}
            <Switch>
                <Route exact component={PostDetails}/>
                <Route path="/details" render={() => <div>created</div>} />
            </Switch>
        </Router>
    );
    const details = screen.getByTestId("detailsPost");
    expect(details).toBeInTheDocument();
  });

});