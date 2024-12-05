import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-slate-200 m-4 ">
            <div className=' bg-gray-300 ml-6 m-2 pt-2  rounded-xl'>
                <h3 className="text-4xl p-2 ">Reading Time :{readingTime}</h3>
            </div>
            <div className=' bg-gray-300 ml-6 m-2 pt-2 rounded-xl'>
                <h2 className="text-3xl text-center  bg-gray-300">Bookmarked Blogs: {bookmarks.length}</h2>
            </div>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id} 
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;