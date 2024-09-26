import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./components/ProtectedLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              <ProtectedLayout>
                <UserList />
              </ProtectedLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
