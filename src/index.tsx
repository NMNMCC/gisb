import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router, Route } from "wouter";
import { Home } from "./page/Home";
import { Main } from "./layout/Main";
import { Article } from "./component/Article";

import "./init";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Main>
            <Router>
                <Route path="/:id">
                    {({ id }) => (
                        <Article.Container id={id}></Article.Container>
                    )}
                </Route>
                <Route path="/" component={Home}></Route>
            </Router>
        </Main>
    </StrictMode>,
);
