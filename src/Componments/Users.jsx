import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./homeCrud.module.css";
import { Link } from "react-router-dom";

const Users = () => {
  let [content, setContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user").then((response) => {
      // console.log(response.data);
      setContent(response.data);
    });
  }, []);

  let deleteData = (a) => {
    axios.delete(`http://localhost:3000/user/${a}`);
    window.location.assign("/xyz");
  };
  console.log(content);
  return (
    <section id={style.profile}>
      {content.map((x) => {
        return (
          <div id={style.cards} key={x.id}>
            Id:<h3>{x.ids}</h3>
            Name:<h3>{x.name}</h3>
            Salary:<h3>{x.sal}</h3>
            Company:<h3>{x.company}</h3>
            <Link to={`/rai/${x.id}`} className="btn btn-success m-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </Link>
            <Link
              onClick={() => {
                deleteData(x.id);
              }}
              className="btn btn-danger m-2"
            >
              {" "}
              <i class="fa-solid fa-trash"></i>{" "}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Users;
