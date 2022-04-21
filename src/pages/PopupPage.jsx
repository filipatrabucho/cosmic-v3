import React from "react";
import EmailPopup from "../component/emailpopup/EmailPop";
import { useState, useEffect } from "react";

function PopupPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(function() {
      setShowPopup(true);
    }, 30000);
  });

  return (
    <div>
      {showPopup && <EmailPopup/>}
    </div>
  );
}

export default PopupPage;
