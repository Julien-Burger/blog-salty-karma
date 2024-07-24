const api_url = import.meta.env.DEV ? "http://localhost:4000" : "https://back.julienburger.fr";

export const API_ROUTES = {
    GET_BLOGS: `${api_url}/blog/get-blogs`,
    GET_BLOG: `${api_url}/blog/get-blog`,
};
