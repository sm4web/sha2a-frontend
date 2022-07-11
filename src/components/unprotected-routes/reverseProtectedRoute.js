import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ReverseProtectedRoute = () => {
    const loggedIn = useSelector(state => state.user.loggedIn)
    const location = useLocation();
    return loggedIn ? (
        <Navigate to="/home/user" replace state={{from: location}}/>
    ) : (
        <Outlet/>
    );
};

export default ReverseProtectedRoute;
