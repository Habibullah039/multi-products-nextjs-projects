import BlogDetails from "@/components/ui/BlogDetails";
import { Blog, BlogId } from "@/types";


export const generateStaticParams = async () => {

    const data = await fetch("http://localhost:5000/blogs");
    const blogs = await data.json() ;

    return  blogs.slice(0 , 3).map((blog : Blog) => ({

        blogId : blog.id ,
    }));
    
} ;

const BlogDetailPage = async ({params} : BlogId) => {

    const data = await fetch(`http://localhost:5000/blogs/${params.blogId}` , {
        cache : "no-store" ,
    }) ;
    const blog = await data.json() ;
  
    return (
        <div className="my-[100px]">
            
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailPage;