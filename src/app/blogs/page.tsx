"use client" ;

import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import { Blog } from '@/types';


const BlogPage =  () => {

    

    const {data:blogs, isLoading , isError ,error } = useGetBlogsQuery(" ") ;
    console.log(blogs);
    

    return (
        <div className="w-[90%] mx-auto my-[50px]">
            <h1 className="text-center text-3xl font-bold mb-[50px]">Our All Blogs</h1>

            <div className="grid grid-cols-3 gap-4 my-10">
                {
                    blogs?.map((blog : Blog) => (

                    <BlogCard key={blog.id} blog={blog} />

                ))}
            </div>

        </div>
    );
};

export default BlogPage;