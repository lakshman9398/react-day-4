import React, { useState, useEffect } from "react";

function App() {
  // State to store profile visits
  const [visitCount, setVisitCount] = useState(0);

  // Update browser tab title whenever visitCount changes
  useEffect(() => {
    document.title = `Profile Visits: ${visitCount}`;
  }, [visitCount]);

  // Function to increase visit count
  const handleVisit = () => {
    setVisitCount(visitCount + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>Profile Visit Counter</h1>

      <h2>Profile Visits: {visitCount}</h2>

      <button
        onClick={handleVisit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Visit Profile
      </button>

      {/* Show this message when visits are 5 or more */}
      {visitCount >= 5 && (
        <h2 style={{ color: "green", marginTop: "20px" }}>
          ⭐ Popular Profile
        </h2>
      )}
    </div>
  );
}

export default App;