import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoutes = () => {
    const loggedIn = useSelector(state => state.user.loggedIn)
    const location = useLocation();
    return loggedIn ? (
        <Outlet/>
    ) : (
        <Navigate to="/login" replace state={{from: location}}/>
    );
};

export default ProtectedRoutes;
