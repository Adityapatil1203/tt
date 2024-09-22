

// const Navbar = () => {
//     return (
//         <header className="flex flex-col justify-center items-end px-20 py-8 w-full bg-fuchsia-900 max-md:px-5 max-md:max-w-full">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/453d7f9f6cea57a2509908a65e0eeed26744ef50fd1fda88d15746653b858ee0?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
//             alt=""
//             className="object-contain aspect-square w-[45px]"
//           />
//         </header>
//       );
// }

// export default Navbar

import React from 'react';

const logout = () => {
  if(!window.confirm("are you sure want to logout"))
     return
  localStorage.removeItem("token"); // Removes the token from localStorage
  // Optionally, you can redirect to the login page after logout
  window.location.href = "/login";
};


const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-purple-700 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Welcome to Digitalflake Admin</h1>
      <div className="flex items-center">
        <button onClick={logout} className="text-lg">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
