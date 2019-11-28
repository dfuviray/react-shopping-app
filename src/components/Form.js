import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="desc"
            />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              name="price"
            />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mb-1 mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              name="quantity"
            />
          </div>

          <div className="col-sm-12 col-md-3 col-lg-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
