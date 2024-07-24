import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import julienChibi from "../../assets/julien_chibi.webp";
import enzoChibi from "../../assets/enzo_chibi.webp";
import { extractLinks, generateUniqueId } from "../../utils/common";
import "./style.scss";
import { useBlog } from "../../utils/hooks";

function Blog() {
    const { id } = useParams();
    const { t, i18n } = useTranslation("blog");
    const { blog, nextBlog, previousBlog, isPreviousBlog, isNextBlog } = useBlog(i18n.language, id);
    let linkId = -1;

    if (!blog) return;

    return (
        <section className="blog">
            <div className="blogHeader">
                <div>
                    <span className="blogType">{blog.blog_type}</span>

                    <Link to="/">
                        <p>{t("return")}</p>
                        <i className="fa-solid fa-caret-right fa-xl"></i>
                    </Link>
                </div>

                <h1>{blog.title}</h1>

                <div>
                    <span id={blog.release_date} className="date">
                        {blog.release_date}
                    </span>
                    {blog.writer === "Julien" ? (
                        <img src={julienChibi} alt="Julien chibi" />
                    ) : blog.writer === "Enzo" ? (
                        <img src={enzoChibi} alt="Enzo chibi" />
                    ) : (
                        <img src={julienChibi} alt="Enzo & Julien chibi" />
                    )}
                </div>
            </div>

            <div className="blogBody">
                {blog.body.map((element) => {
                    return element.type === "block" ? (
                        <div className="block" key={generateUniqueId()}>
                            {element.content.map((content) => {
                                if (typeof content === "string") {
                                    const parts = extractLinks(content);

                                    return (
                                        <p key={generateUniqueId()}>
                                            {parts.map((p) => {
                                                if (p.isLink) {
                                                    linkId++;
                                                }
                                                return p.isLink ? (
                                                    <a
                                                        key={generateUniqueId()}
                                                        href={blog.links[linkId]}
                                                        target="_blank"
                                                        className="link"
                                                    >
                                                        {p.text}
                                                    </a>
                                                ) : (
                                                    p.text
                                                );
                                            })}
                                        </p>
                                    );
                                } else if (content.subtype === "list") {
                                    return (
                                        <ul key={generateUniqueId()}>
                                            {content.subcontent.map((listElement) => {
                                                const parts = extractLinks(listElement);

                                                return (
                                                    <li key={generateUniqueId()}>
                                                        {parts.map((p) => {
                                                            if (p.isLink) {
                                                                linkId++;
                                                            }
                                                            return p.isLink ? (
                                                                <a
                                                                    key={generateUniqueId()}
                                                                    href={blog.links[linkId]}
                                                                    target="_blank"
                                                                    className="link"
                                                                >
                                                                    {p.text}
                                                                </a>
                                                            ) : (
                                                                p.text
                                                            );
                                                        })}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    );
                                } else if (content.subtype === "image") {
                                    return (
                                        <figure key={generateUniqueId()}>
                                            <img
                                                src={content.src}
                                                alt={content.alt}
                                                width={content.width}
                                                height={content.height}
                                            />
                                            <figcaption>{content.figcaption}</figcaption>
                                        </figure>
                                    );
                                }
                            })}
                        </div>
                    ) : (
                        <h2 key={generateUniqueId()}>{element.content}</h2>
                    );
                })}

                {blog.writer === "Julien" ? (
                    <p className="sign">-Julien, {t("coFounder")}.</p>
                ) : blog.writer === "Enzo" ? (
                    <p className="sign">-Enzo, {t("coFounder")}.</p>
                ) : (
                    <p className="sign">-Julien & Enzo, {t("founders")}.</p>
                )}
            </div>

            <div className="blogFooter">
                <div>
                    {isPreviousBlog && (
                        <Link reloadDocument to={`/blog/${previousBlog.blog_id}`} className="previousBlogContainer">
                            <i className="fa-solid fa-caret-left fa-xl"></i>
                            <span className="previousBlog">{previousBlog.title}</span>
                        </Link>
                    )}

                    {isNextBlog && (
                        <Link reloadDocument to={`/blog/${nextBlog.blog_id}`} className="nextBlogContainer">
                            <span className={`nextBlog ${!isNextBlog && "onlyOneBlog"}`}>{nextBlog.title}</span>
                            <i className="fa-solid fa-caret-right fa-xl"></i>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Blog;
