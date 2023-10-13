import React, { useState } from "react";

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    // Implement your admin login logic here
    if (
      adminData.username === "admin" &&
      adminData.password === "adminpassword"
    ) {
      // Successful login
      console.log("Admin logged in");
    } else {
      // Failed login
      console.log("Admin login failed");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={adminData.username}
          onChange={(e) =>
            setAdminData({ ...adminData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={adminData.password}
          onChange={(e) =>
            setAdminData({ ...adminData, password: e.target.value })
          }
        />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
