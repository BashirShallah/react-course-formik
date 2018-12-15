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
      <Field name="email" type="email" /><br />
      <label>Type</label><br />
      <Field name="type" component="select">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Field>
      <br />
      <label>Active</label><br />
      <Field name="active" type="checkbox" /><br />
      <br />
      <label>Category</label><br />
      <Field name="category" type="radio" value="1" /> 1<br />
      <Field name="category" type="radio" value="2" /> 2<br />

      <button type="submit">Send</button>
    </form>
  }

  render() {
    return (
      <div className="App">
        <Formik 
          initialValues={{name: "bashir", email: "", type: "",active: false,category: ""}}
          onSubmit={this.onSubmit}
          render={this.form}
          />
      </div>
    );
  }
}

export default App;
