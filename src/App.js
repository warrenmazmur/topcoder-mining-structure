import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MineSiteInput from "./components/MineSiteInput";
import MineSiteOverview from "./components/MineSiteOverview";

import "./App.scss";

function App() {
  const [names, setNames] = useState(["kerbau", "macan", "ayam", "zebra"]);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <MineSiteInput
              passNames = {
                (namesInput) => setNames(namesInput) 
              }
            />
          </Route>
          <Route path='/overview'>
            <MineSiteOverview names={names}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
