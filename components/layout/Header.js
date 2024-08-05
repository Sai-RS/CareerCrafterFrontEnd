import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import AuthContext from "../../context/AuthContext";

const Header = () => {
  const { loading, user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="navWrapper">
      <div className="navContainer">
        <Link href="/">
          <div className="logoWrapper">
            <div className="logoImgWrapper">
              <Image width="50" height="50" src="/images/logo.png" alt="" />
            </div>
            <span className="logo1">Job</span>
            <span className="logo2">bee</span>
          </div>
        </Link>
        <div className="btnsWrapper">
          {user?.role === "Recruiter" && (
            <Link href="/employeer/jobs/new">
              <button className="postAJobButton">
                <span>Post A Job</span>
              </button>
            </Link>
          )}

          {user ? (
            <div className="dropdown ml-3">
              <a
                className="btn dropdown-toggle mr-4"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Hi, {user.first_name}</span>{" "}
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user?.role === "Recruiter" && (
                  <Link href="/employeer/jobs">
                    <div className="dropdown-item"> My Jobs </div>
                  </Link>
                )}
                {user.role === "JobSeeker" && (
                  <Link href="/me/applied">
                    <div className="dropdown-item"> Jobs Applied </div>
                  </Link>
                )}

                <Link href="/me">
                  <div className="dropdown-item"> Profile </div>
                </Link>

                <Link href="/upload/resume">
                  <div className="dropdown-item"> Upload Resume </div>
                </Link>

                <Link href="/">
                  <div
                    className="dropdown-item text-danger"
                    onClick={logoutHandler}
                  >
                    {" "}
                    Logout{" "}
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <button className="loginButtonHeader">
                  <span>Login</span>
                </button>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
