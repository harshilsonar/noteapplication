import axios from 'axios';
import React, { useState } from 'react'
const BaseUrl = import.meta.env.VITE_BASEURL

const Login = () => {
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
           axios.post(BaseUrl+"/api/users/register",formData,{
                       withCredentials:true
           })
           localStorage.setItem("current user",JSON.stringify(res?.data?.user))
        } catch (error) {
          alert(error)
        }
    };
  
    return (
      <div className="form-container">
        <h2>Register User</h2>
        <form onSubmit={handleSubmit} className="form">
         
  
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
}

export default Login