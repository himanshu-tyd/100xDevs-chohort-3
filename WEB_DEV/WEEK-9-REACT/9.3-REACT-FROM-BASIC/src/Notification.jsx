import  { useEffect, useState } from "react";
import icon from "./assets/notification.svg";

const Notification = () => {
  const [notification, setNotification] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNotification((pre) => pre + 1);
    }, 1000);
  }, []);
 
  return (
    <div style={{ display: "relative", width: "100%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img src={icon} style={{ color: "white" }} />
        <span
          style={{
            padding: "10px 10px",
            backgroundColor: "red",
            borderRadius: "100%",
            display: "absolute",
            top: "0",
          }}
        >
          {notification}
        </span>
      </div>
    </div>
  );
};

export default Notification;
