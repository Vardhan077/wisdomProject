
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SortingBar from "../components/SortingBar";
import UserList from "../components/UserList";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Directory</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortingBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default HomePage;
