import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Event from "./Event";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";

const EventCategory = () => {
    const events = useLoaderData();
    const { category_id } = useParams();
    const catID = parseInt(category_id)
    const currentCategory = events.filter(event => event.category_id == category_id)

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const currentBlog = blogs.filter(blog => blog.category_id === catID)
    console.log(currentBlog);
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-12 my-12">
                {
                    currentCategory.map(event => <Event key={event.id} event={event}></Event>)
                }

            </div>
            <div className="my-8 flex justify-center">
                <button className="btn btn-sm bg-orange-600 mt-4"><Link to="/" className="text-white flex "><AiOutlineArrowLeft></AiOutlineArrowLeft> See All Category</Link></button>
            </div>
            <div>
                <h2 className="text-2xl font-bold block border-b-2 mx-4 text-orange-500 p-2">Category Related Blogs:</h2>
                {
                    currentBlog.map(blog => <div key={blog.blog_id} className="border p-2 grid lg:grid-cols-3  grid-cols-1 gap-6 mx-12 mt-12">

                        <img src={blog.image} alt="" className="w-[400px] h-[300px] rounded md:mx-auto" />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">{blog.blog_title}</h2>
                            <p className="text-xl font-bold">Author: {blog.author}</p>
                            <p className="text-xl font-bold">Date: {blog.date}</p>
                        </div>
                        <p className="text-xl">{blog.content}</p>

                    </div>)
                }
            </div>
            <div className="flex justify-center">
                    <Link to="/blogs" className="btn btn-sm bg-orange-600 text-white mt-8">See All Blogs</Link>
  
            </div>

        </div>
    );
};

export default EventCategory;