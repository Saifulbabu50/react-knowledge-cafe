import PropTypes from 'prop-types';
import Frame from '../../assets/images/Frame.svg'

const Blog = ({blog}) => {
    console.log(blog);
    
    const { title, cover, author, author_img, posted_date, reading_time, hashtags }= blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center p-2'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center pr-5'>
                    <span>{reading_time}min read</span>
                    <img className='w-6' src={Frame} alt="" />
                </div>
            </div>
            <h2 className='text-4xl font-normal mt-12 mb-10'>{title}</h2>
            <p className='pl-5'>
                {
                    hashtags.map((has, idx) => <span key={idx} className='pl-8'><a href="">{has}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;