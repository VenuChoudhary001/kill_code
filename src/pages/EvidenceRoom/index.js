import React, { useContext } from "react";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import STORE from "../../Context/store";
const EVIDENCE_ROOM = () => {
  const { data } = useContext(STORE);
  return (
    <>
      <Navbar />
      <SubNav />
      <section className="container">
        {data.evidence &&
          data.evidence.map((item) => (
            <List
              key={item.id}
              title={item.title}
              type={"evidence"}
              id={item.id}
            />
          ))}
      </section>
    </>
  );
};

export default EVIDENCE_ROOM;
