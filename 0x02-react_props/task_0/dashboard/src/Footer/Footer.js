import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <div className="App-footer">
      <p>{getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}

export default Footer;
