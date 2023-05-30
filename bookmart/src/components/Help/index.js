import React from "react";
const Help = () => {
  const iframeStyle = {
    width: "25%",
    height: "600px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    margin: "50px 200px",
  };
  return (
    <iframe
      style={iframeStyle}
      src="https://widget.kommunicate.io/chat?appId=177621733461a3fe72fca980f71f0337f"
      allow="microphone; geolocation;"
    ></iframe>
  );
};

export default Help;
