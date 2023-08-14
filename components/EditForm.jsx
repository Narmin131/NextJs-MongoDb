"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const EditForm = ({ id, username, phone }) => {
  const [newUsername, setNewUsername] = useState(username);
  const [newPhone, setNewPhone] = useState(phone);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newUsername, newPhone }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onChange={(e) => setNewUsername(e.target.value)}
              defaultValue={username}
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
              onChange={(e) => setNewPhone(e.target.value)}
              defaultValue={phone}
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

export default EditForm;
