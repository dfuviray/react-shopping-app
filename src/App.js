import React, { Component } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="container-fluid">
            <Form />
            <Table />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
