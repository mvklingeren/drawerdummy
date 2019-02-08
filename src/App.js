import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Drawer } from "devextreme-react";

function Menu() {
  return (
    <div className="App">
      <p>Menu</p>
      <Link to="/dummy1">Dummy1</Link>
      <Link to="/dummy2">Dummy2</Link>
    </div>
  );
}

function Dummy1() {
  return (
    <div className="App">
      <h1>Hi im a dummy #1</h1>
    </div>
  );
}

function Dummy2() {
  return (
    <div className="App">
      <h1>Hi im dummy number Two</h1>
    </div>
  );
}

export function AppNotWorking() {
  return (
    <BrowserRouter>
      <Drawer opened component={Menu}>
        {/* HERE routes inside drawer */}
        <Route path="/dummy1/" component={Dummy1} />
        <Route path="/dummy2/" component={Dummy2} />
      </Drawer>
    </BrowserRouter>
  );
}

export function AppWorking() {
  return (
    <BrowserRouter>
      <>
        <Drawer opened component={Menu} />
        {/* HERE routes outside drawer */}
        <Route path="/dummy1/" component={Dummy1} />
        <Route path="/dummy2/" component={Dummy2} />
      </>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWorking />, rootElement);
