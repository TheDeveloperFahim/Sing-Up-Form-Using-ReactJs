import { useState } from "react";

export default function Form() {
  const [info, setInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInfo((preValue) => {
      if (name === "userName") {
        return {
          userName: value,
          userEmail: preValue.userEmail,
        };
      } else if (name === "userEmail") {
        return {
          userEmail: value,
          userName: preValue.userName,
        };
      } else if (name === "userPhone") {
        return {
          userPhone: value,
          userEmail: preValue.userEmail,
          userName: preValue.userName,
        };
      } else if (name === "userPassword") {
        return {
          userPassword: value,
          userPhone: preValue.userPhone,
          userEmail: preValue.userEmail,
          userName: preValue.userName,
        };
      }
    });
  };

  return (
    <>
      <div className="main">
        <div className="userInfo">
          <h3>user information</h3>
          <ul>
            <li>User Name : {info.userName}</li>
            <li>User Emaill : {info.userEmail}</li>
            <li>User Phone : {info.userPhone}</li>
            <li>User Password : {info.userPassword}</li>
          </ul>
        </div>
        <div className="singUpForm">
          <h1 className="heading">welcome</h1>
          <form>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={inputEvent}
              name="userName"
              value={info.userName}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={inputEvent}
              name="userEmail"
              value={info.userEmail}
            />
            <input
              type="phone"
              placeholder="Enter Your Phone"
              onChange={inputEvent}
              name="userPhone"
              value={info.userPhone}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={inputEvent}
              name="userPassword"
              value={info.userPassword}
            />
            <br />
            <button className="btn">submit me</button>
          </form>
        </div>
      </div>
    </>
  );
}


// Thank you guys for watch this video and if you like this video so please like and share this video and like ans follow my page also . Sourch code on my github and github and sourch code link in this video description . Thank you all guys ans take love ♥♥