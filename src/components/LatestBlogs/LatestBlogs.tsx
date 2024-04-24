import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";


const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className="w-[90%] mx-auto my-[100px]">
            <h1 className="text-center text-3xl font-bold my-4">Our Latest
                <span className="text-green-500"> Blogs </span>
            </h1>
            <p className="text-center text-sm text-gray-400 w-2/4 mx-auto mb-5">
                <i>
                    Meaningful content inspires them to read on. It inspires them to take action. It can inspire them to make a purchase or engage with your services
                </i>
            </p>
            <div className="grid grid-cols-2 gap-4 my-[100px]">
                {
                    blogs.slice(0, 2).map((blog) => (

                    <LatestBlogCard key={blog.id} blog={blog} />

                    ))}
            </div>

            <div className="grid grid-cols-3 gap-4 my-5">
                {
                    blogs.slice(2, 5).map((blog) => (

                    <BlogCard key={blog.id} blog={blog} />

                ))}
            </div>

        </div>
    );
};

export default LatestBlogs;