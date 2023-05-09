import { useState, useEffect } from "react";

import Layout from "@/component/Layout";
import { useRouter } from "next/router";
// import { getUsers, editUser } from "../Service/api";


const index = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [like, likechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);




  const router = useRouter();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, like, active };

    fetch("https://postgrid-data-api-server.onrender.com/layoutList", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    navigate("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Layout>

        <form action="" onSubmit={handlesubmit} className="contailner text-text">
        <h4>Edit Information</h4>

        <label htmlFor="">ID</label>
          <input value={id} disabled="disabled" className=""></input>
        
            <label htmlFor="my-input">Name</label>
            <input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={name}
            id="my-input"
            aria-describedby="my-helper-text"
            />

<label>Name</label>
          <input
            required
            value={name}
            onMouseDown={(e) => valchange(true)}
            onChange={(e) => namechange(e.target.value)}
            className="form-control"
          ></input>
        
        
            
        
        
            <label htmlFor="my-input">Email</label>
            <input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
            id="my-input"
            aria-describedby="my-helper-text"
            />
        
        
            <label htmlFor="my-input">Like</label>
            <input
            onChange={(e) => onValueChange(e)}
            name="like"
            value={like}
            id="my-input"
            aria-describedby="my-helper-text"
            />
        
        
            <button
            variant="contained"
            color="primary"
            onClick={() => editUserDetails()}
            >
            Edit User
            </button>
        
        </form>
    </Layout>
  );
};

export default index;
