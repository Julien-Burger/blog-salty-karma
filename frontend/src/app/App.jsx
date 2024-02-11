import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Blog from "../pages/blog";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
