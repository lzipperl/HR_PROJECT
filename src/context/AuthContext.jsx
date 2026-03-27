import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const defaultUsers = {
  lpu_employee1: { password: 'hrm123', role: 'admin', name: 'HR Admin' },
  lpu_employee2: { password: 'hrm456', role: 'employee', name: 'Employee' },
};

export function AuthProvider({ children }) {
  const [usersDb, setUsersDb] = useState(() => {
    const saved = localStorage.getItem('hrconnect_users_db');
    return saved ? JSON.parse(saved) : defaultUsers;
  });
  
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem('hrconnect_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [toast, setToast] = useState(null);

  const login = (username, password) => {
    const account = usersDb[username];
    if (account && account.password === password) {
      const userData = { username, role: account.role, name: account.name };
      setUser(userData);
      sessionStorage.setItem('hrconnect_user', JSON.stringify(userData));
      setToast({ message: `Welcome back, ${account.name}!`, type: 'success' });
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password. Please try again.' };
  };

  const signup = (name, email, username, password, role = 'employee') => {
    if (usersDb[username]) {
      return { success: false, error: 'Username already exists.' };
    }
    const updatedDb = { ...usersDb, [username]: { password, role, name, email } };
    setUsersDb(updatedDb);
    localStorage.setItem('hrconnect_users_db', JSON.stringify(updatedDb));
    setToast({ message: 'Account created successfully! Please log in.', type: 'success' });
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('hrconnect_user');
  };

  const clearToast = () => setToast(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, toast, clearToast }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

export default AuthContext;
