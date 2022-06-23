import React from "react";
import Routes from "./Config/Routes";
import Header from "./feature/Header/Header";
import Footer from "./feature/Footer/Footer";

const UserPage = () => {
  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
