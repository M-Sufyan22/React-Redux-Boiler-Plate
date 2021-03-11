import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../store/action/actions";
import "../css/style.css";

function SignUpForm(props) {
  const submitForm = (event) => {
    event.preventDefault();
    var form = document.getElementById("AdUserForm");
    form.reset();
    props.addNewUser(props.newUser);
    props.ShowMesseger();
  };

  return (
    <div className="form-container">
      <form
        action=""
        method="POST"
        onSubmit={submitForm}
        className="form"
        id="AdUserForm"
      >
        <div className="form-grp">
          <label htmlFor="">UserName: </label>

          <input
            type="text"
            placeholder="Name"
            autoComplete="off"
            name="name"
            onChange={(e) => props.saveUserData(e.target.name, e.target.value)}
            required
          />
        </div>

        <div className="form-grp">
          <label htmlFor="">Email: </label>

          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
            onChange={(e) => props.saveUserData(e.target.name, e.target.value)}
            required
          />
        </div>

        <div className="form-grp">
          <label htmlFor="">UserName: </label>

          <input
            type="number"
            placeholder="Age"
            autoComplete="off"
            name="age"
            onChange={(e) => props.saveUserData(e.target.name, e.target.value)}
            required
          />
        </div>

        <div className="form-grp">
          <label htmlFor="">Status: </label>

          <input
            type="radio"
            name="status"
            id="Married"
            value="Married"
            onChange={(e) => props.saveUserData(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="Married">Married</label>
          <input
            type="radio"
            name="status"
            id="radio"
            value="Single"
            onChange={(e) => props.saveUserData(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="radio">Single</label>
        </div>
        <div className="form-grp">
          <button type="submit">Add New User</button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (newUser) => dispatch(addNewUser(newUser)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
