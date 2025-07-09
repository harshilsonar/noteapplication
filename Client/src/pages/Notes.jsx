import React, { useEffect, useState } from 'react';
import ShowNotes from '../components/ShowNotes';
import axios from 'axios';

const BaseUrl = import.meta.env.VITE_BASEURL;

const Notes = () => {
  const [data, setdata] = useState([]);
  const currentuser = JSON.parse(localStorage.getItem("currentUser")); // ✅ check your key

  const getdatafromserver = () => {
    axios
      .get(BaseUrl+`/api/notes/notes/${currentuser._id}`, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data.note);
        setdata(res.data.note); // ✅ fix
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdatafromserver(); // ✅ only once
  }, []);

  return (
    <div>
      {data.map((el) => (
        <ShowNotes key={el._id} {...el} /> // ✅ fixed syntax + added key
      ))}
    </div>
  );
};

export default Notes;
