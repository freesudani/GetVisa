import React from "react";
import { homeObjFour } from "./Data";
import { InfoSection } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
