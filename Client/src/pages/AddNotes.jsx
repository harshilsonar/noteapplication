import axios from 'axios';
import React, { useState } from 'react'
const BaseUrl = import.meta.env.VITE_BASEURL

const AddNotes = () => {
   const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(BaseUrl+"/api/notes/create",formData,{
        withCredentials:true
      })
      .then((res)=>{
        console.log(res)
      })
      alert("Note added successfully!");
      setFormData({ title: "", content: "" }); // reset form
    } catch (error) {
      console.error("Error adding note:", error.message);
      alert("Failed to add note.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="5"
          required
        />
        <br /><br />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNotes