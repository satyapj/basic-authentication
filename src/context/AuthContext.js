const { createContext } = require("react");

const AuthContext = createContext({ isAuthenticated: false });

export default AuthContext;