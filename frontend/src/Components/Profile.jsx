import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <h2>User is not logged In..!</h2>;
  }
  console.log(user);
  return (
    <div className="mt-5">
      <h1 className="text-secondary fs-3 mb-4">Profile</h1>
      <div className="fs-3">
        <p>
          <span className="text-body-tertiary">Name :</span> {user.name}
        </p>
        <p>
          <span className="text-body-tertiary">Email : </span>
          {user.email}{" "}
        </p>
      </div>
    </div>
  );
}
