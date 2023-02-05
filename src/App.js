import './App.css';
import Dashboard from './component/Dashboard';
import {Context} from './util/AppContext';

import * as React from "react";
import {useState} from "react";

function App() {

  const [isLogin,setIsLogin] = useState(false);



  return (

    <div className="App">
        <Context.Provider value={{isLogin,setIsLogin}}>
            <Dashboard />
        </Context.Provider>
    </div>

  );
}

export default App;
