
import React from 'react';
import UserList from '../components/UserList';
import ThemeToggle from '../components/ThemeToggle';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <h1 className="text-3xl font-bold text-center py-6">User Directory</h1>
      <UserList />
    </div>
  );
};

export default HomePage;
