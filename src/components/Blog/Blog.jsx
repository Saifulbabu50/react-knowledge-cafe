import PropTypes from 'prop-types';
import Frame from '../../assets/images/Frame.svg'


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    
    
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags }= blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-4 items-center p-2'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center pr-5'>
                    <span>{reading_time}min read</span>
                    <img onClick={() => handleAddToBookmark(blog)} className='w-6' src={Frame} alt="" />
                </div>
            </div>
            <h2 className='text-4xl font-normal mt-12 mb-10'>{title}</h2>
            <p className='pl-5'>
                {
                    hashtags.map((has, idx) => <span key={idx} className='pl-8'><a href="">{has}</a></span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead(id,reading_time)}
                className='text-purple-700 font-bold underline'
                >Mark As Red
            </button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
    
}
    
export default Blog;