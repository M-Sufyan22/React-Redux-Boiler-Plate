import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addNewUser } from "../store/action/actions";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/style.css";
import ShowMsg from "../components/ShowMsg";

function Home(props) {
  const [showMsg, setShowMsg] = useState(false);

  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    age: 0,
    status: "",
  });

  const saveUserData = (formField, value) => {
    const [key, val] = [formField, value];
    setNewUser({
      ...newUser,
      [key]: val,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const getsUser = await props.user;
      setUser(getsUser);
    }
    fetchData();
  }, [props.user]);
  const ShowMesseger = () => {
    setTimeout(() => {
      setShowMsg(false);
    }, 2500);
    setShowMsg(true);
  };
  return (
    <div>
      <Header />
      {showMsg ? (
        <ShowMsg msg="New user added successfully!" type="success" />
      ) : null}
      <SignUpForm
        saveUserData={saveUserData}
        newUser={newUser}
        ShowMesseger={ShowMesseger}
      />

      {user.map((v, i) => (
        <div key={i}>
          <table
            className="userDetailsTable"
            border="1"
            width="85%"
            cellSpacing="0"
            cellPadding="0"
            align="center"
          >
            <thead>
              <tr>
                <th>UserName</th>
                <th>Email</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.age}</td>
                <td>{v.status}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">Designed by muhammad sufyan</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (newUser) => dispatch(addNewUser(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
