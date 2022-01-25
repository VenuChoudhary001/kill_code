import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home_Page/home";
import Registration from "./pages/Registration/registration";
import Login from "./pages/Login/login";
import Timer from "./pages/Timer/timer";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/registration" element={<Registration />} />
                <Route exact path="/login" element={<Login />} />
                 <Route exact path="/timer" element={<Timer />} />
                </Routes>
        </Router>
    )
}

export default ReactRouterSetup;