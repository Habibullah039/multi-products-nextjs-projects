import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <div className="pt-[140px]">
                <h1 className='md:text-7xl text-3xl font-serif text-center text-white'>Seven Agency</h1>
                <h4 className='text-2xl mt-5 mb-[50px] text-[#dd27a0] text-center'>Smart digital solutions</h4>
                <div className='flex justify-center items-center text-white'>
                    <button className='bg-[#090423] mx-3  px-7 py-[14px]  uppercase rounded md:text-md hover:bg-[#6c21bd] font-medium '>Read More</button>
                    <button className='bg-[#21BDA1] mx-3 px-7 py-[14px] uppercase rounded md:text-md hover:bg-[#d11a41] font-medium'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;