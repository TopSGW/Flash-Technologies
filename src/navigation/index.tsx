import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import FlashToken from "../pages/Flashtoken";

const Navigation: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FlashToken />} />
        
      </Routes>


    </>
  );
};

export default Navigation;
