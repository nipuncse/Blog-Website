import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const withAuth = (Component) => {
	return (props) => {
		const navigate = useNavigate();
		const { currentUser } = useContext(UserContext);
		useEffect(() => {
			// debugger;
			if (!currentUser?.username) {
				// Redirect to login page
				navigate('/login');
			}
		}, [navigate, currentUser]);
		return <Component {...props} />;
	}
}

export default withAuth;