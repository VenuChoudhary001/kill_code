import React, { useContext } from "react";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import STORE from "../../Context/store";

const PROFILES = () => {
  const { data } = useContext(STORE);
  return (
    <>
      <Navbar />
      <SubNav/>
      <section className="container">
        {data.profiles &&
          data.profiles.map((item) => <List title={item.name} avatar={item.avatar_url}
          type="profile"
          id={item.id} />)}
      </section>
    </>
  );
};

export default PROFILES;
