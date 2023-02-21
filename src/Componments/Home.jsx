import React from 'react'
import style from "./homeCrud.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section id={style.nav}>
      <Link to="/abc">Create-Users</Link>
      <Link to="/xyz">Users</Link>
    </section>
  );
}

export default Home