import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

import BlogCard from "../../components/blogCard";
import { API_ROUTES } from "../../utils/api.routes";
import "./style.scss";
import { useBlogs } from "../../utils/hooks";

function Home() {
    const { i18n } = useTranslation();
    const blogs = useBlogs();

    if (blogs.length === 0) return;

    return (
        <section className="blogs">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h1>Blogs</h1>
            </div>

            <section>
                {blogs.map((blog) => {
                    return (
                        <BlogCard
                            key={blog.blog_id}
                            id={blog.blog_id}
                            type={blog.blog_type}
                            date={blog.release_date}
                            blogNumber={blog._id}
                            title={blog.title[i18n.language]}
                            description={blog.description[i18n.language]}
                        />
                    );
                })}
            </section>
        </section>
    );
}

export default Home;
