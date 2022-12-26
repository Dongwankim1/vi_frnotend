import './App.css';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Nav from "./component/Nav";

import * as React from "react";
function App() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };


  return (

    <div className="App">
            <Dashboard />
    </div>

  );
}

export default App;
