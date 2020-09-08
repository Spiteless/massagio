import { useEffect } from "react";
import { getUser, logoutUser } from "../redux/authReducer";

export const IsActiveSession = initialValue => {
  const func = () => {
    getUser()
    }

  useEffect(func, [])
  console.log("IsActiveSession has run")
};