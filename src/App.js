import React, { Component } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

class App extends Component {
  state = {
    name: "John"
  };

  changeName() {
    this.setState({ name: "Smith" });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="container-fluid">
            <Form title="Shopping Form" />
            <Table />
          </div>
          <h1>{this.state.name}</h1>
          <button onClick={() => this.changeName()}>Change Name</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
