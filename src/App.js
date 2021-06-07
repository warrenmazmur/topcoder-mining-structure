import MineSiteInput from "./components/MineSiteInput";
import MineSiteOverview from "./components/MineSiteOverview";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <div>
        <MineSiteInput/>
        <MineSiteOverview names={["jiang", "warren", "chris", "adam"]}/>
      </div>
    </div>
  );
}

export default App;
