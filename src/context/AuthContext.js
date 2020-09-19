const { createContext } = require("react");

const AuthContext = createContext({ isAuthenticated: false, setAuthenticated: null });

export default AuthContext;