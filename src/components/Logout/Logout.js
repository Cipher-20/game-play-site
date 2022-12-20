import { Navigate } from "react-router-dom";

import * as authServices from '../../services/authServices';

const Logout = ({
    onLogout
}) => {
    authServices.logout();
    onLogout();

    return <Navigate to="/" />;
}

export default Logout;