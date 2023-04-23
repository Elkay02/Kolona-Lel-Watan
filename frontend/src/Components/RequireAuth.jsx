import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    console.log(currentUser)
    if (currentUser == null) {
        return <Navigate to="/login" />;
    }
    
    return children;
    }

export default RequireAuth;