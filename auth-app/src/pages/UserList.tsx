import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiEdit, FiTrash, FiLogOut, FiUser, FiBell } from "react-icons/fi";
import { IApiResponse, User } from "../types";
import { ToastContainer, toast } from 'react-toastify';
import { Api } from "../services/api";
import { useAuth } from "../hooks/useAuth";

function UserList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const [filteredUsers, setFilteredUsers] = useState<Array<User>>(
    []
  );
  const navigate = useNavigate();
  const auth = useAuth();

  // const users = [
  //   { id: 1, username: "john_doe", email: "john@example.com", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
  //   { id: 2, username: "jane_smith", email: "jane@example.com", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
  //   { id: 3, username: "mike_johnson", email: "mike@example.com", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
  //   { id: 4, username: "sarah_williams", email: "sarah@example.com", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
  // ];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await Api.get<IApiResponse>('api/v1/users');
        const users = response.data.data;

        setUsers(users);
        setFilteredUsers(users);
      } catch (error) {
        toast.error("Opa! Credenciais inválidas");
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const results = users.filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(results);
  }, [searchTerm, users]);



  const handleUserClick = (userId: number) => {
    console.log(`User ${userId} clicked`);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/><ToastContainer />
    <header>
        <div className="container header-container">
          <h1 className="header-title">User List</h1>
          <div className="relative">
            <button onClick={toggleProfileMenu} className="profile-menu-button">
              <FiUser className="button-size" />
              <span>Perfil</span>
            </button>
            {isProfileMenuOpen && (
              <div className="profile-menu">
                <a href="#" className="profile-menu-item">
                  Editar Perfil
                </a>
                <a href="#" className="profile-menu-item">
                  <div className="flex items-center">
                    <FiBell className="mr-2" />
                    Notificações
                  </div>
                </a>
                <a href="#" className="profile-menu-item">
                  <div className="flex items-center" onClick={handleLogout}>
                    <FiLogOut className="mr-2" />
                    Sair
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    <main>
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
            onClick={() => handleUserClick(user.id)}
            tabIndex={0}
            role="button"
            aria-label={`View ${user.username}'s profile`}
          >
            <div className="p-6 flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={`${user.username}'s avatar`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{user.username}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  aria-label={`Edit ${user.username}'s profile`}
                >
                  <FiEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  aria-label={`Delete ${user.username}'s profile`}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No users found.</p>
      )}
    </div>
    </main>
    </>
  );
}

export default UserList;
