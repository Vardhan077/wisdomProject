

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
      >
        ← Go Back
      </button>
      <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone}</p>
      <p className="text-gray-600">Company: {user.company.name}</p>
      <p className="text-gray-600">Website: {user.website}</p>
    </div>
  );
};

export default UserDetailPage;
