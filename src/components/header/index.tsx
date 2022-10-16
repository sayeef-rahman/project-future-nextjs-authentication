import React, { useEffect, useState } from "react";
import { Logo } from "@components";
import Link from "next/link";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { logOut } from "@redux/slices/auth";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const auth = useSelector((state: RootStateOrAny) => state.auth);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(auth.userData));
    // if (Object.keys(auth.userData).length !== 0) {
    //   setIsAuthenticated(true);
    // } else {
    //   setIsAuthenticated(false);
    // }
    if (Object.keys(auth.userData).length !== 0) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [auth]);

  // Signout function
  const handleSignOut = async () => {
    dispatch(logOut());
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    router.push("/");
  };

  console.log("auth.userData: ", auth.userData);

  return (
    <div className="py-2" style={{ backgroundColor: "#20232a" }}>
      <div className="container d-flex align-content-center justify-content-between">
        <div className="d-flex">
          <Logo />
        </div>
        <ul
          className="text-white m-0 d-flex align-items-center"
          style={{ listStyle: "none" }}
        >
          <li className="mx-2 customLink">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mx-2 customLink">Blogs</li>
          <li className="mx-2 customLink">About</li>
          <li className="mx-2 customLink">
            {isAuthenticated ? (
              <span onClick={() => handleSignOut()}>Sign out</span>
            ) : (
              <Link href={"/login"} className="text-white customLink">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
