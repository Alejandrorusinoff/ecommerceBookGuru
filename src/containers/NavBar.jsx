import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../store/books";
import { setUser } from "../store/user";
import isUserValidated from "../hooks/isUserValidated";
import { getBookByAuthorOrTitle } from "../axiosRequests/booksRequests";
import Dropdown from "./DropdownContainer";
import "../styles/NavBar.css";
import { setInput } from "../store/input";
const imagen = require("../assets/Logo.png");

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const input = useSelector((state) => state.input)

  const handleChange = (e) => {
    dispatch(setInput(e.target.value))
  };

  const searchBooks = (e) => {
    const input = e.target.value
    if(input){
      getBookByAuthorOrTitle(input)
      .then((res) => dispatch(setBooks(res.data)))
      .then(() => history.push(`/search/${input}`))
    }
    else{
      history.push(`/books`)
    }
  };

  const logout = () => {
    localStorage.clear();
    dispatch(setUser({}));
  };

  return (
    <div className="navBarAndSubRowDiv">
      {/* Search Bar */}
      <div className="row">
        <div className="navbarMainDiv">
          <div className="col-sm-2">
            <Link to="/">
              <img className="logo" src={imagen.default} alt="BookGuru logo" />
            </Link>
          </div>
          <div className="col-sm-6">
            <form style={{ width: "auto" }} onChange={searchBooks} onSubmit={(e)=>{e.preventDefault()}}>
              {/*  <Link to={'/books'}> */}
              <input
                style={{ width: "40vw" }}
                placeholder="Search books..."
                // inputProps={{ "aria-label": "search" }}
                className="search-bar"
                onChange={handleChange}
              />
              {/* </Link> */}
            </form>
          </div>
          <div className="userCartRegisterDiv">
            {isUserValidated(user) ? (
              <h4
                className="sub-link"
                style={{ textDecoration: "none" }}
              >{`${user.username}`}</h4>
            ) : null}
            <div className="col-sm-4">
              {/* Shopping cart */}
              {isUserValidated(user) ? (
                <Link to="/cart">
                  <div className="icon-cart">
                    <div className="cart-line-1"></div>
                    <div className="cart-line-2"></div>
                    <div className="cart-line-3"></div>
                    <div className="cart-wheel"></div>
                  </div>
                </Link>
              ) : null}
            </div>
            <div className="col-sm-1">
              {/* User icon/menu */}
              <div className="userAndLogInDiv">
                {isUserValidated(user) ? (
                  <Link to={`/users/${user.id}`}>
                    <div className="user"></div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <div className="user"></div>
                  </Link>
                )}
                {/* <div className="dropdown"> */}
                {/* <button class="dropbtn">Dropdown</button> */}
                <div>
                  {!isUserValidated(user) ? (
                    <div>
                      <Link to="/register" className="sub-link">
                        Sign Up
                      </Link>
                      <br />
                      <Link to="/login" className="sub-link">
                        Login
                      </Link>
                    </div>
                  ) : (
                    <Link to="/" className="sub-link" onClick={() => logout()}>
                      Logout
                    </Link>
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="sub-row">
        <div className="col-sm-2">
          <Dropdown />
        </div>
        <div className="col-sm-2">
          <Link to="/books" className="sub-link">
            Books
          </Link>
        </div>
        <div className="col-sm-2">
          <Link to="/contact" className="sub-link">
            Contact
          </Link>
        </div>
        <div className="col-sm-2">
          <Link to="/about" className="sub-link">
            About
          </Link>
        </div>
        <hr />
      </div>
      <br />
    </div>
  );
};

export default NavBar;
