import Link from "next/link";
import React from "react";
import RemoveBtn from "./removeBtn";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function UserList() {
  const { users } = await getUsers();

  return (
    <>
      <section>
        <div className="container mt-5">
          <Link className="btn btn-success" href="/addUser">
            Add new user
          </Link>
          {users.length !== 0 ? (
            <table className="table mt-2">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Phone number</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{item._id}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link
                            className="btn btn-warning m-2"
                            href={`/editUser/${item._id}`}
                          >
                            Edit
                          </Link>
                          <RemoveBtn id={item._id} />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
