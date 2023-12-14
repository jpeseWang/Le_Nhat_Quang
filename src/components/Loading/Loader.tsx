import React from "react";

import "./Loader.scss";
function Loader() {
  return (
    <div className="mx-auto">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
