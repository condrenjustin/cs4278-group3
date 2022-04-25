import React, { useContext, useState, useEffect } from "react";

// global context for Auth
const AuthContext = React.createContext();

// export the AuthContext
export function useAuth() {
  return useContext(AuthContext)
}

// Auth provider for private routing
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}