

import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/user/${user.id}`}
      className="block p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </Link>
  );
};

export default UserCard;
