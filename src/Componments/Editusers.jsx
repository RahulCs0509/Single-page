import React, { useEffect } from "react";
import style from "./homeCrud.module.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editusers = () => {
  let [name, setName] = useState("");
  let [sal, setSal] = useState("");
  let [company, setCompany] = useState("");
  let [ids, setIds] = useState("");
  let { rahul } = useParams();
  let Navigate = useNavigate();

  console.log(rahul);
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
    axios.put(`http://localhost:3000/user/${rahul}`, payload).then(() => {
      console.log("DATA HAS BEEN ADDED");
    });
    Navigate("/xyz");
  };
  useEffect(() => {
    axios.get(`http://localhost:3000/user/${rahul}`).then((x) => {
      console.log(x.data);
      setIds(x.data.ids);
      setName(x.data.name);
      setSal(x.data.sal);
      setCompany(x.data.company);
    });
  }, [rahul]);

  return (
    <form action="" id={style.form}>
      <label>EMP-Ids:</label>
      <input type="text" value={ids} onChange={idsdata} />
      <br />
      <label>EMP-Name:</label>
      <input type="text" value={name} onChange={nameData} />
      <br />
      <label>EMP-Salary:</label>
      <input type="number" value={sal} onChange={salData} />
      <br />
      <label>EMP-Company:</label>
      <input type="text" value={company} onChange={companyData} />
      <br />
      <button onClick={formHandle}>Update</button>
    </form>
  );
};

export default Editusers;
