import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let ProtectedRoute = ({ children }) => {
  let { user } = useSelector((state) => state.User);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return children;
};

export default ProtectedRoute;
