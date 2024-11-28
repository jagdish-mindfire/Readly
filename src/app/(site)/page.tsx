"use client";
import { useState, useEffect } from "react";
import { Blog } from "../../../types/blog";
import { getAllBlogs } from "../../../sanity/sanity-utils";
import BlogCard from "./components/cards/BlogCard";

export default function Home() {
  const [blogsData, setBlogsData] = useState<Blog[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  // Fetch blogs data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs(); // Directly calling the server function
      setBlogsData(blogs);
      setFilteredBlogs(blogs);
    };

    fetchBlogs();
  }, []);

  // Filter blogs when the search text changes
  useEffect(() => {
    if (searchText === "") {
      setFilteredBlogs(blogsData);
    } else {
      setFilteredBlogs(
        blogsData.filter((blog) =>
          blog.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText, blogsData]);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-6">
      <h1 className="text-5xl font-extrabold mt-2 text-center">
        Welcome to
        <span className="bg-gradient-to-r from-red-800 via-blue-500 to-purple-800 bg-clip-text text-transparent">
          {" "}
          Readly
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Discover and share amazing stories from around the world.
      </p>

      {/* Search Bar */}
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md px-6 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
        />
      </div>

      <h3 className="mt-16 text-3xl font-bold text-center">Latest Blogs</h3>

      {filteredBlogs.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id}/>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-gray-600">
          No blogs match your search.
        </p>
      )}
    </div>
  );
}
