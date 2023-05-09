import Layout from "@/component/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [like, likechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const router = useRouter();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, like, active };
    console.log(empdata);

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

  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center ">
        <form
          action=""
          onSubmit={handlesubmit}
          className="contailner text-text"
        >
          <h2 className="text-text text-3xl text-center">Layout Create</h2>
          <label htmlFor="">ID</label>
          <input value={id} disabled="disabled" className=""></input>
          <label>Name</label>
          <input
            required
            value={name}
            onMouseDown={(e) => valchange(true)}
            onChange={(e) => namechange(e.target.value)}
            className="form-control"
          ></input>
          {name.length == 0 && validation && (
            <span className="text-danger">Enter the name</span>
          )}
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => emailchange(e.target.value)}
            className="form-control"
          ></input>
          <label>like</label>
          <input
            value={like}
            onChange={(e) => likechange(e.target.value)}
            className="form-control"
          ></input>
          <input
            checked={active}
            onChange={(e) => activechange(e.target.checked)}
            type="checkbox"
            className="form-check-input"
          ></input>
          <label className="form-check-label">Is Active</label>
          <div className="form-group">
            <button className="btn btn-success" type="submit">
              Save
            </button>
            <Link href="/" className="btn btn-danger">
              Back
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default index;
