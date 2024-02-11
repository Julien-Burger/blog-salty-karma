import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import dataEn from "../../data/blogsDataEn.json";
import dataFr from "../../data/blogsDataFr.json";
import "./style.scss";
import julienChibi from "../../assets/julien_chibi.png";
import { generateUniqueId } from "../../utils/common";

function Blog() {
    const { id } = useParams();
    const { t, i18n } = useTranslation("blog");
    let blogData;
    let nextBlog;
    let previousBlog;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);

    if (i18n.language == "fr") {
        blogData = dataFr.find((blog) => {
            if (id == blog.id) {
                return blog;
            }
        });

        nextBlog = dataFr.find((blog) => {
            if (blogData.blogNumber + 1 === dataFr.length) {
                return undefined;
            }
            if (blog.blogNumber === blogData.blogNumber + 1) {
                return blog;
            }
        });

        previousBlog = dataFr.find((blog) => {
            if (blogData.blogNumber - 1 === -1) {
                return undefined;
            }
            if (blog.blogNumber === blogData.blogNumber - 1) {
                return blog;
            }
        });
    } else {
        blogData = dataEn.find((blog) => {
            if (id == blog.id) {
                return blog;
            }
        });

        nextBlog = dataEn.find((blog) => {
            if (blogData.blogNumber + 1 === dataEn.length) {
                return undefined;
            }
            if (blog.blogNumber === blogData.blogNumber + 1) {
                return blog;
            }
        });

        previousBlog = dataEn.find((blog) => {
            if (blogData.blogNumber - 1 === -1) {
                return undefined;
            }
            if (blog.blogNumber === blogData.blogNumber - 1) {
                return blog;
            }
        });
    }

    return (
        <>
            <section className="blog">
                <div className="blogHeader">
                    <div>
                        <span className="blogType">{blogData.blogType}</span>

                        <Link to="/">
                            <p>{t("return")}</p>
                            <i className="fa-solid fa-caret-right fa-xl"></i>
                        </Link>
                    </div>

                    <h1>{blogData.title}</h1>

                    <div>
                        <span id={blogData.date} className="date">
                            {blogData.date}
                        </span>
                        {blogData.writer == "Julien" ? (
                            <img src={julienChibi} alt="Julien chibi" />
                        ) : (
                            <img src={julienChibi} alt="Enzo chibi" />
                        )}
                    </div>
                </div>

                <div className="blogBody">
                    {blogData.body.map((element, index) => {
                        {
                            return element.type === "block" ? (
                                <div className="block" key={generateUniqueId()}>
                                    {element.content.map((content, index) => {
                                        return typeof content === "string" ? (
                                            <p key={generateUniqueId()}>{content}</p>
                                        ) : content.subtype === "list" ? (
                                            <ul key={generateUniqueId()}>
                                                {content.subcontent.map((listElement) => {
                                                    return (
                                                        <li key={generateUniqueId()}>
                                                            {typeof listElement === "string" ? (
                                                                listElement
                                                            ) : (
                                                                <a href={listElement.href} className="link" target="_blank">
                                                                    {listElement.link}
                                                                </a>
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        ) : (
                                            content.subtype === "image" && (
                                                <figure key={generateUniqueId()}>
                                                    <img
                                                        src={content.src}
                                                        alt={content.alt}
                                                        width={content.width}
                                                        height={content.height}
                                                    />
                                                    <figcaption>{content.figcaption}</figcaption>
                                                </figure>
                                            )
                                        );
                                    })}
                                </div>
                            ) : (
                                <h2 key={generateUniqueId()}>{element.content}</h2>
                            );
                        }
                    })}

                    {blogData.writer == "Julien" ? (
                        <p className="sign">-Julien, {t("founder")}.</p>
                    ) : (
                        <p className="sign">-Enzo, {t("founder")}.</p>
                    )}
                </div>

                <div className="blogFooter">
                    <div>
                        {previousBlog && (
                            <Link to={`/blog/${previousBlog.id}`} className="previousBlogContainer">
                                <i className="fa-solid fa-caret-left fa-xl"></i>
                                <p className="previousBlog">{previousBlog.title}</p>
                            </Link>
                        )}

                        {nextBlog && (
                            <Link to={`/blog/${nextBlog.id}`} className="nextBlogContainer">
                                <p className={`nextBlog ${!previousBlog && "onlyOneBlog"}`}>{nextBlog.title}</p>
                                <i className="fa-solid fa-caret-right fa-xl"></i>
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
