import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Blog from "../pages/blog";
import Error from "../pages/error";
import Header from "../components/header";
import Footer from "../components/footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
