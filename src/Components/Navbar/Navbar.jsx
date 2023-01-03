import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import plus from "../../Assets/plusicon.svg";
import './Navbar.css';
import { AppContext } from "../../context";
import { useContext } from "react";
import cross from '../../Assets/cross.svg';

const Navbar = () => {
  let { pending,setPending } = useContext(AppContext);
  let [title, setTitle] = useState('');
  let [description, setdescription] = useState('');
  let [modalState,setModalstate] = useState(false);


  function AddTodo()
  {
    let data = { title: title , desc:  description  };
    setPending([...pending,data])
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} className="navbar__logo-img" alt="logo-pic" />
          <h1 className="navbar__logo-text">To Do App</h1>
        </div>
        <div className="navbar__right">
          <div className="navbar__right-options">
            <p>Filter Board:</p>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/pending">Pending</Link>
            </li>
            <li>
              <Link to="/inprogress">Inprogress</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </div>
          {modalState ? (
            <div
              className="navbar__right-addtodo"
              onClick={() => setModalstate(false)}
            >
              <p className="navbar__right-addtodo-text">Cancel New Todo</p>
              <img
                src={cross}
                alt="plus icon"
                className="navbar__right-addtodo-img"
              />
            </div>
          ) : (
            <div
              className="navbar__right-addtodo"
              onClick={() => setModalstate(true)}
            >
              <p className="navbar__right-addtodo-text">Create a New Todo</p>
              <img
                src={plus}
                alt="plus icon"
                className="navbar__right-addtodo-img"
              />
            </div>
          )}

          {modalState ? (
            <div className="navbar__right-addtodo-modal">
              <label
                htmlFor="title"
                className="navbar__right-addtodo-modal-title"
              >
                Title
              </label>
              <input
                className="firstinput"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="description" className="tododesc">Description</label>
              <textarea
                cols="30"
                rows="10"
                name="description"
                value={description}
                className="todotxtarea"
                onChange={(e) => setdescription(e.target.value)}
              />
              <button onClick={AddTodo} className="todobtn">
                Create Todo
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
