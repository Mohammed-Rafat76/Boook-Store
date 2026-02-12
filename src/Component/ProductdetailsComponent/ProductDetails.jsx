import { Link } from "react-router-dom";



export default function ProductDetails() {
  return (
    <div className='w-full flex flex-col gap-10 pb-45'>
        <div className='flex justify-start items-center gap-20 border-b-2 border-[#2222221A] pb-6'>
            <h1 className='h-full font-bold text-[26px] text-[#222222] border-b-3 border-[#EAA451]'>Product Details</h1>
            <Link to={"/customerReviewsPage"} className='font-bold text-[26px] text-[#22222280]'>Customer Reviews</Link>
            <Link to={"/recomendedForYouPage"} className='font-bold text-[26px] text-[#22222280]'>Recomended For You</Link>
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='font-bold text-black text-[20px]'>Book Title : <span className='font-normal'>Rich Dad And Poor Dad</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Author : <span className='font-normal'> Robert T. Kiyosaki</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Publication Date  : <span className='font-normal'> 1997</span></h1>
            <h1 className='font-bold text-black text-[20px]'>ASIN :<span className='font-normal'> B09TWSRMCB</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Language : <span className='font-normal'> English</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Publisher :  <span className='font-normal'>Printer</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Pages : <span className='font-normal'> 336</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Book Format :  <span className='font-normal'>Hard Cover</span></h1>
            <h1 className='font-bold text-black text-[20px]'>Best Seller Rank : <span className='font-normal'> #3</span></h1>
        </div>
    </div>
  )
}
