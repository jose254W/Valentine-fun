import React, { useState } from "react";

function Valentine() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = (response) => {
    setShowConfirm(false);
    if (response === "yes") {
      setMessage("❤️ I LOVE YOU ❤️\n❤️GIFT COMING ❤️");
    } else {
      setMessage("❤️ I STILL LOVE YOU ❤️");
    }
  };

  return (
    <div style={{ backgroundColor: "pink", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button
        style={{
          backgroundColor: "red",
          border: "2px solid white",
          borderRadius: "10px",
          fontSize: "20px",
          padding: "10px 20px",
        }}
        onClick={handleClick}
      >
        Click me
      </button>
      {showConfirm && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "2px solid red",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}>Will you be my Valentine?</p>
          <p  style={{ fontSize: "20px" }}>❤️❤️❤️</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontSize: "20px",
                padding: "10px 20px",
                margin: "10px",
              }}
              onClick={() => handleConfirm("yes")}
            >
              Yes
            </button>
            <button
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontSize: "20px",
                padding: "10px 20px",
                margin: "10px",
              }}
              onClick={() => handleConfirm("no")}
            >
              No
            </button>
          </div>
        </div>
      )}
      {message && (
        <div className="message-animation"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "red",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            fontSize: "20px",
            color: "white",
            whiteSpace: "pre-line",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Valentine;
