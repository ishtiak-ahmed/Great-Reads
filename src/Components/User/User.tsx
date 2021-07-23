import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces";

export default function User() {
  const userData = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h2>Welcome {userData.name}</h2>
    </div>
  );
}
