import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Loading.css";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-box">
        <h1 className="loading-text">FOLLOW SCARLET THREADS</h1>
        <p className="sub-text">ESCAPE ROOM TEAM MATCHING</p>
      </div>
    </div>
  );
};

export default Loading;
