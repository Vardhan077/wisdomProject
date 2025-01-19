# React.js User Directory

A modern, responsive React.js application that fetches and displays a list of users from an API. The app includes features like searching, sorting, and detailed user information pages. Styled using Tailwind CSS for a sleek UI.

---

## Features

- **Home Page**:
  - Displays a list of users with their name, email, and city.
  - Search bar to filter users by name.
  - Sorting functionality (A-Z and Z-A by name).
  - Responsive design for mobile and desktop.

- **User Detail Page**:
  - Displays full user details including name, email, phone, company, and website.
  - "Go Back" button to return to the home page.

- **Additional Enhancements**:
  - State management using React Context API.
  - Loading and error handling during API calls.
  - Fully responsive design.
  - Styled with Tailwind CSS for a modern UI.

---

## Setup and Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v20.0.0 or later)
- npm (or yarn)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-user-directory.git
   cd react-user-directory
2. Install dependencies:
   npm install
3. Start the development server:
   npm start
4. Open your browser and navigate to:
   http://localhost:3000


## Project Structure

src/
├── components/
│   ├── UserList.js       // Renders the list of users
│   ├── UserCard.js       // Displays individual user details on the home page
│   ├── UserDetail.js     // Displays detailed information of a user
│   ├── SearchBar.js      // Search functionality for filtering users
│   └── SortingBar.js     // Sorting functionality for A-Z, Z-A
├── context/              // Context API logic for global state management
├── pages/
│   ├── HomePage.js       // Displays the home page with user list
│   └── UserDetailPage.js // Displays detailed view of a selected user
├── App.js                // Main app component with routing
├── index.js              // Entry point of the React app
├── index.css             // Global Tailwind CSS styles



## API Used
This project fetches user data from the following API:

https://jsonplaceholder.typicode.com/users




## Deployment
The project has been deployed on Netlify/Vercel. You can view the live version of the application here:

[Live Demo](https://wisdompeak.netlify.app/)
