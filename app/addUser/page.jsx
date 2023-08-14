"use client"

import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const AddUser = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    if (!username || !phone) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, phone }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link type="submit" className="btn btn-danger m-1" href='/'>
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddUser;
