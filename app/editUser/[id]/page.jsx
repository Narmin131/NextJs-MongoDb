const { default: EditForm } = require("@/components/EditForm");

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditUser = async ({ params }) => {
  const { id } = params;
  const { user } = await getTopicById(id);
  const { username, phone } = user;
  return (
    <>
      <EditForm id={id} username={username} phone={phone} />
    </>
  );
};

export default EditUser;
