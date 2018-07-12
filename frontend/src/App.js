import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./comps/DataProvider";
import Table from "./comps/Table";

const App = () => (
    <DataProvider endpoint="api/leads"
                    render={data => <Table data={data} />} />
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;

export default App;
