// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../context/Auth/auth";
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import Loader from "../../Loader/Loader";

// export default function PrivateRoute() {
//   const [ok, setOK] = useState(false);
//   const [auth] = useAuth();

//   useEffect(() => {
//     const authCheck = async () => {
//       try {
//         const res = await axios.get("/api/v1/auth/user-auth");
//         if (res.data && res.data.ok) {
//           setOK(true);
//         } else {
//           setOK(false);
//         }
//       } catch (error) {
//         console.error("Error checking authentication:", error.message);
//         setOK(false);
//       }
//     };

//     if (auth?.token) {
//       authCheck();
//     } else {
//       setOK(true); // No token, not authenticated
//     }
//   }, [auth?.token]);

//   return ok ? <Outlet /> : <Loader />;
// }

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../context/Auth/auth";
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import Loader from "../../Loader/Loader";

// export default function PrivateRoute() {
//   const [ok, setOk] = useState(false);
//   const [auth] = useAuth();

//   useEffect(() => {
//     const authCheck = async () => {
//       const res = await axios.get("/api/v1/auth/user-auth");
//       if (res.data.ok) {
//         setOk(true);
//       } else {
//         setOk(false);
//       }
//     };
//     if (auth?.token) authCheck();
//   }, [auth?.token]);

//   return ok ? <Outlet /> : <Loader />;
// }
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { useAuth } from "../../../context/Auth/auth";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loader />;
}
