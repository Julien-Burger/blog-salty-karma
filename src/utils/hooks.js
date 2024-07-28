import { useEffect, useState } from "react";
import axios from "axios";

import { API_ROUTES } from "./api.routes";

/**
 * Hook on clicks outside of the passed ref
 * @param dependencies Use to reload the hook when value change
 */
export const useOutsideClick = (ref, callback, dependencies = []) => {
    useEffect(() => {
        /**
         * Run callback if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, ...dependencies]);
};

/**
 * Get the last 4 blogs of the current page index
 */
export const useBlogs = (pageIndex) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const {
                data: { blogs },
            } = await axios.get(API_ROUTES.GET_BLOGS);

            setBlogs(blogs);
        };

        getBlogs();
    }, []);

    return blogs;
};

/**
 * Get the current blog based on id
 * @param {string} lng Language of the displayed blog
 * @param {string} id
 * @returns The current blog, previous and next
 */
export const useBlog = (id) => {
    const [blogs, setBlogs] = useState({});

    useEffect(() => {
        const getBlogs = async () => {
            const {
                data: { blog, previousBlog, nextBlog },
            } = await axios.get(API_ROUTES.GET_BLOG, {
                params: {
                    id,
                },
            });

            const data = {
                blog,
                previousBlog,
                nextBlog,
                isPreviousBlog: Object.keys(previousBlog).length > 0,
                isNextBlog: Object.keys(nextBlog).length > 0,
            };

            setBlogs(data);
        };

        getBlogs();
    }, []);

    return blogs;
};
