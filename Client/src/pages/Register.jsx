import React, { useState } from 'react'
import axios from "axios"
const BaseUrl = import.meta.env.VITE_BASEURL
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(BaseUrl + "/api/users/register", formData)
      alert(res)
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="form-container">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default Register