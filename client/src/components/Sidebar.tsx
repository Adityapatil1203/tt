// import React from 'react';

// const Sidebar: React.FC = () => {
//   const sidebarItems = [
//     {
//       icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb6604518e9e9f197bab0ba6d5fddeb3dd4987838c2363434a1e3704a7797894?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef',
//       text: 'Home',
//       active: true,
//     },
//     {
//       icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d8edd6005c62581cd21295ec20d633693915713d183c1b6e7299c2cd901e5fd8?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef',
//       text: 'Roles',
//       active: false,
//     },
//     {
//       icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f625e5143fa93c4f8404fc0386e6de1afca554015434f6fd175e6f174c056bc6?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef',
//       text: 'Users',
//       active: false,
//     },
//   ];

//   return (
//     <nav className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col pt-12 mx-auto w-full text-2xl text-black whitespace-nowrap bg-zinc-100 pb-[659px] max-md:pb-24 max-md:mt-3.5">
//         {sidebarItems.map((item, index) => (
//           <SidebarItem key={index} {...item} />
//         ))}
//       </div>
//     </nav>
//   );
// };

// interface SidebarItemProps {
//   icon: string;
//   text: string;
//   active: boolean;
// }

// const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active }) => {
//   return (
//     <div
//       className={`flex gap-5 justify-between py-1.5 pr-2.5 pl-9 w-full ${
//         active ? 'bg-orange-200' : ''
//       } ${!active ? 'mt-11 max-md:mt-10' : ''} max-md:pl-5`}
//     >
//       <div className="flex gap-6">
//         <img
//           loading="lazy"
//           src={icon}
//           alt=""
//           className="object-contain shrink-0 aspect-square w-[42px]"
//         />
//         <div className="my-auto">{text}</div>
//       </div>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f968cf1e7c94c3214d01382bf0c06b65125d97adc937a6b1f7b3565baff98ea?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
//         alt=""
//         className="object-contain shrink-0 my-auto w-6 aspect-square"
//       />
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserAlt, FaUserShield } from 'react-icons/fa'; // Using react-icons for the icons
import { FiChevronRight } from 'react-icons/fi'; // Chevron icon

const Sidebar: React.FC = () => {
  const location = useLocation(); // Get the current route for active link highlighting

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col shadow-lg">
      <nav className="flex flex-col space-y-2">
        {/* Home link */}
        <Link
          to="/"
          className={`flex items-center space-x-4 p-3 rounded-md ${
            location.pathname === '/'
              ? 'bg-yellow-200 text-black'
              : 'text-gray-600 hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaHome className="text-xl" />
          <span className="text-lg font-medium">Home</span>
          <FiChevronRight className="ml-auto" />
        </Link>

        {/* Roles link */}
        <Link
          to="/roles"
          className={`flex items-center space-x-4 p-3 rounded-md ${
            location.pathname === '/roles'
              ? 'bg-yellow-200 text-black'
              : 'text-gray-600 hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaUserShield className="text-xl" />
          <span className="text-lg font-medium">Roles</span>
          <FiChevronRight className="ml-auto" />
        </Link>

        {/* Users link */}
        <Link
          to="/users"
          className={`flex items-center space-x-4 p-3 rounded-md ${
            location.pathname === '/users'
              ? 'bg-yellow-200 text-black'
              : 'text-gray-600 hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaUserAlt className="text-xl" />
          <span className="text-lg font-medium">Users</span>
          <FiChevronRight className="ml-auto" />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaUserAlt, FaUserShield } from 'react-icons/fa';
// import { FiChevronRight } from 'react-icons/fi';

// const Sidebar: React.FC = () => {
//   const location = useLocation();

//   return (
//     <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col shadow-lg">
//       <nav className="flex flex-col space-y-2">
//         {/* Home link */}
//         <Link
//           to="/"
//           className={`flex items-center space-x-4 p-3 rounded-md ${
//             location.pathname === '/' || location.pathname === ''
//               ? 'bg-yellow-200 text-black'
//               : 'text-gray-600 hover:bg-gray-200 hover:text-black'
//           }`}
//         >
//           <FaHome className="text-xl" />
//           <span className="text-lg font-medium">Home</span>
//           <FiChevronRight className="ml-auto" />
//         </Link>

//         {/* Roles link */}
//         <Link
//           to="/roles"
//           className={`flex items-center space-x-4 p-3 rounded-md ${
//             location.pathname.startsWith('/roles')
//               ? 'bg-yellow-200 text-black'
//               : 'text-gray-600 hover:bg-gray-200 hover:text-black'
//           }`}
//         >
//           <FaUserShield className="text-xl" />
//           <span className="text-lg font-medium">Roles</span>
//           <FiChevronRight className="ml-auto" />
//         </Link>

//         {/* Users link */}
//         <Link
//           to="/users"
//           className={`flex items-center space-x-4 p-3 rounded-md ${
//             location.pathname.startsWith('/users')
//               ? 'bg-yellow-200 text-black'
//               : 'text-gray-600 hover:bg-gray-200 hover:text-black'
//           }`}
//         >
//           <FaUserAlt className="text-xl" />
//           <span className="text-lg font-medium">Users</span>
//           <FiChevronRight className="ml-auto" />
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

