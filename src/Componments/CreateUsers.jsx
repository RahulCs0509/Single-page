import axios from "axios";
import React, { useState } from "react";
import style from "./homeCrud.module.css";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  let [name, setName] = useState("");
  let [sal, setSal] = useState("");
  let [company, setCompany] = useState("");
  let [ids, setIds] = useState("");
  let Navigate = useNavigate();
  let idsdata = (e) => {
    setIds(e.target.value);
  };
  let nameData = (e) => {
    setName(e.target.value);
  };
  let salData = (e) => {
    setSal(e.target.value);
  };
  let companyData = (e) => {
    setCompany(e.target.value);
  };
  let formHandle = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(salary);
    // console.log(company);
    let payload = { ids, name, sal, company };
    axios.post("http://localhost:3000/user/", payload).then(() => {
      console.log("DATA HAS BEEN ADDED");
    });
    Navigate("/xyz");
  };
  return (
    <div id={style.MainForm}>
      <form>
        <label>Emp-Ids:</label>
        <input type="text" value={ids} onChange={idsdata} />
        <br />
        <label>Emp-Name:</label>
        <input type="text" value={name} onChange={nameData} />
        <br />
        <label>Emp-Salary:</label>
        <input type="number" value={sal} onChange={salData} />
        <br />
        <label>Emp-Company:</label>
        <input type="text" value={company} onChange={companyData} />
        <br />
        <button onClick={formHandle}>Submit</button>
      </form>
    </div>
  );
};

export default CreateUsers;
