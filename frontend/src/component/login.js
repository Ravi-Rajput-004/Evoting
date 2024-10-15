import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const login = async () => {
    const data = {email, password};
    
      try {
        const res = await fetch(`${process.env.REACT_APP_APIURL}login`, {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        if (res.ok) {
          const result = await res.json();
          if (result.statuscode === 1) {
            alert("login Successfully");
          }
          else{
            alert('password is incorrect')
          }
        }
      } catch (error) {
        alert(error.message);
      }
  
  };


return (
  <div>
    <input
      type="email"
      placeholder="enter your email"
      onChange={(e) => setemail(e.target.value)}
    />
    <input
      type="password"
      placeholder="enter your passwprd"
      onChange={(e) => setpassword(e.target.value)}
    />
    <button onClick={login}>Submit</button>
  </div>
);
}
export default Login;
