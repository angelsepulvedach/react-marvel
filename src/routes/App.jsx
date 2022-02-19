import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.css";
import Characters from "../containers/Characters";
import Favorites from "../containers/Favorites";
import Layout from "../components/Layout";
import Error404 from "../components/Error404";
//const Favorites = lazy(() => import("../containers/Favorites"));

const App = () => (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/favorites" component={Favorites}/>
            <Route exact path="/" component={Characters}/>
              <Route path="*" component={Error404}/>
          </Switch>
        </Layout>
    </BrowserRouter>
);


export default App;
