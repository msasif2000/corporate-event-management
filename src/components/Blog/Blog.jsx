import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {blog_title, author, date, category, image, content} = blog;
    return (
        <div className='border mb-4 p-4'>
            <img src={image} alt="" className='w-full h-[300px]'/>
            <div className="p-4 space-y-2">
                <h2 className='text-2xl font-bold'>{blog_title}</h2>
                <p className='text-gray-500'>Author: <span className='font-bold'>{author}</span></p>
                <p className='text-gray-500'>Date: <span className='font-bold'>{date}</span></p>
                <p className='text-gray-500'>Category: <span className='font-bold'>{category}</span></p>
                <p className='text-gray-500'>{content}</p>
                </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;