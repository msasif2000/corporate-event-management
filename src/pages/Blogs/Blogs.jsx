import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Blog from "../../components/Blog/Blog";


const Blogs = () => {
    const [dataLength, setDataLength] = useState(8);
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-2">
                {
                    blogs.slice(0, dataLength).map(blog => <Blog key={blog.blog_id} blog={blog}></Blog>)
                }
            </div>
            <div className="flex justify-center">
                <div className={dataLength >= blogs.length && 'hidden'}>
                    <button onClick={() => setDataLength(blogs.length)} className="btn btn-sm bg-orange-600 text-white mt-8">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;