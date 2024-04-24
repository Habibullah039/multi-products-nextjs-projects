import LatestBlogs from '@/components/LatestBlogs/LatestBlogs';
import Banner from '@/components/shared/Banner';


const HomePage = async() => {

  const data = await fetch("http://localhost:5000/blogs" , {
    next : {
      revalidate : 30 ,
    } ,
  });
  const blogs = await data.json() ;
  

  return (
    <>
      
      <Banner />
      <LatestBlogs blogs={blogs} />

    </>
  );
};

export default HomePage;