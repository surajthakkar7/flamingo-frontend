import React from "react";
import "./CSS/BlogNews.css"; // Import the CSS file for styling

const BlogNews = () => {
  const blogPosts = [
    {
      title: "The Flamingo Multispecialist Hospital Opens Its Doors",
      date: "October 15, 2023",
      content:
        "We are excited to announce the opening of Flamingo Multispecialist Hospital. Our mission is to provide top-quality healthcare services to our community. Read more about our journey and commitment to your health.",
    },
    {
      title: "Celebrating 25 Years of Excellence in Medical Care",
      date: "November 5, 2023",
      content:
        "We are proud to celebrate 25 years of serving our community. We have treated thousands of patients and achieved numerous milestones. Thank you for your trust and support.",
    },
    {
      title: "Advancements in Laparoscopic Surgery at Flamingo Hospital",
      date: "December 10, 2023",
      content:
        "Learn about the latest advancements in laparoscopic surgery at Flamingo Hospital. Our skilled surgical team is dedicated to providing minimally invasive solutions for various abdominal conditions.",
    },
    // Add more blog posts here
  ];

  return (
    <div className="page-container">
      <section className="blog-posts">
        <h1>Blog & News</h1>
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogNews;
