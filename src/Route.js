import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home_Page/home";
import Registration from "./pages/Registration/registration";
import Login from "./pages/Login/login";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/registration" element={<Registration />} />
                <Route exact path="/login" element={<Login />} />
                </Routes>
        </Router>
    )
}

export default ReactRouterSetup;