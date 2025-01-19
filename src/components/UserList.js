import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z'); // Default sorting order

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter and sort users
  const filteredAndSortedUsers = [...users]
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'A-Z') return a.name.localeCompare(b.name);
      if (sortOrder === 'Z-A') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded w-full sm:w-auto flex-grow text-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sorting Dropdown */}
        <select
          className="p-2 border rounded w-full sm:w-auto text-black-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="A-Z" >Sort by Name (A-Z)</option>
          <option value="Z-A" >Sort by Name (Z-A)</option>
        </select>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
