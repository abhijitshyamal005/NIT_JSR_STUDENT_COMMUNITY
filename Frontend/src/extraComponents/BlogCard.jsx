// components/BlogCard.js
import PropTypes from 'prop-types';

const BlogCard = ({ title = 'Default Title', description = 'Default Description', imgSrc = '', tags = [] }) => {
    return (
        <div className="w-[300px] rounded-md border">
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={title}
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
            )}
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                    {title}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 ml-2"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                    {description}
                </p>
                <div className="mt-4">
                    {tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                            >
                                #{tag}
                            </span>
                        ))
                    ) : (
                        <span className="text-sm text-gray-500">No tags available</span>
                    )}
                </div>
                <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Read
                </button>
            </div>
        </div>
    );
};

// Define PropTypes
BlogCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default BlogCard;
