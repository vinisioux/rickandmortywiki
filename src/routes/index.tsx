import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CharacterInfo } from "../pages/CharacterInfo";
import { FavoritesCharacters } from "../pages/FavoritesCharacters";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/character/:id" component={CharacterInfo} />
    <Route path="/favorites" component={FavoritesCharacters} />
  </Switch>
);

export default Routes;
