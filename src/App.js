import React, { Component } from 'react';
import {Formik , Field} from "formik";

class App extends Component {
  
  onSubmit = (values) => {
    console.log(values);
  }

  form = (props) => {
    return <form onSubmit={props.handleSubmit}>
      <label>Name</label><br />
      <Field name="name" /><br />
      <label>Email</label><br />
      <Field name="email" /><br />
      <button type="submit">Send</button>
    </form>
  }

  render() {
    return (
      <div className="App">
        <Formik 
          initialValues={{name: "bashir", email: ""}}
          onSubmit={this.onSubmit}
          render={this.form}
          />
      </div>
    );
  }
}

export default App;
