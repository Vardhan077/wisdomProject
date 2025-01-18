// import React from "react";
// import { Link } from "react-router-dom";

// const UserCard = ({ user }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "15px",
//         marginBottom: "10px",
//         borderRadius: "5px",
//       }}
//     >
//       <h3>{user.name}</h3>
//       <p>Email: {user.email}</p>
//       <p>City: {user.address.city}</p>
//       <Link to={`/user/${user.id}`}>View Details</Link>
//     </div>
//   );
// };

// export default UserCard;



import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">City: {user.address.city}</p>
      <Link
        to={`/user/${user.id}`}
        className="text-blue-500 mt-3 inline-block hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default UserCard;
