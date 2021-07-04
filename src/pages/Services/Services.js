import React from "react";
import { homeObjFour, homeObjThree } from "./Data";
import { InfoSection } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
