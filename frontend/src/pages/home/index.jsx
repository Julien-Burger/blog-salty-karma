import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.scss";
import dataEn from "../../data/blogsDataEn.json";
import dataFr from "../../data/blogsDataFr.json";
import BlogCard from "../../components/blogCard";

function Home() {
    const { i18n } = useTranslation();

    return (
        <>
            <Header />
            <section className="blogs">
                <div className="title">
                    <div></div>
                    <div></div>
                    <div></div>
                    <h2>Blog</h2>
                </div>

                <section>
                    {i18n.language == "fr"
                        ? dataFr.map((blog, index) => {
                              return (
                                  <BlogCard
                                      key={blog.id}
                                      id={blog.id}
                                      type={blog.blogType}
                                      date={blog.date}
                                      blogNumber={dataEn.length - index}
                                      title={blog.title}
                                      description={blog.description}
                                  />
                              );
                          })
                        : dataEn.map((blog, index) => {
                              return (
                                  <BlogCard
                                      key={blog.id}
                                      id={blog.id}
                                      type={blog.blogType}
                                      date={blog.date}
                                      blogNumber={dataEn.length - index}
                                      title={blog.title}
                                      description={blog.description}
                                  />
                              );
                          })}
                </section>
            </section>
            <Footer />
        </>
    );
}

export default Home;
