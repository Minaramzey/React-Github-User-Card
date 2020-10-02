import React from "react";
import User from "./Components/User";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>GitHub User Card</h1>
        {/* <input value={this.state.followers} onChange={this.handleChanges} /> */}
        {/* <button onClick={this.fetchFollowers}>Fetch Doggos</button> */}
      </header>

      <User />
    </div>
  );
}

export default App;
