"use client"
import { useRouter } from "next/navigation";

const RemoveBtn = ({id}) => {
    const router = useRouter();
    const removeTopic = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/users?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };
  return (
    <>
      <button className="btn btn-danger m-2" onClick={removeTopic}>Delete</button>
    </>
  );
};

export default RemoveBtn;
