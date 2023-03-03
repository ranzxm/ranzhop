import banJJK from "../images/jjkbanner-new_MLBB.jpg";
import banBrodyMPL from "../images/brodyMPL_MLBB.jpg";

import mlbbicon from "../images/mlbb-m4.jpg";
import fficon from "../images/ff-new.png";
import giicon from "../images/giicon.jpg";
import lolwricon from "../images/lolwricon.jpg";

import ProductListItem from "../utils/ProductListItem";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";

function Home() {
   const product = {
      datas: [
         {
            title: "Mobile Legends",
            imageUrl: mlbbicon,
            link: "mobile-legends",
         },
         {
            title: "Free Fire",
            imageUrl: fficon,
            link: "free-fire",
         },
         {
            title: "Genshin Impact",
            imageUrl: giicon,
            link: "genshin-impact",
         },
         {
            title: "League of Legends: Wild Rift (X)",
            imageUrl: lolwricon,
            link: "wild-rift",
         },
      ],
   };

   return (
      <>
         <div className="container mx-auto">
            <section className="home-ranzhop-content">
               <div className="data-content">
                  <div className="home-feeds container px-4 sm:p-0">
                     <div className="home-feeds-items">
                        <div className="flex justify-center items-center my-4 ">
                           <div className="container banner md:w-3/4 w-full">
                              <Swiper
                                 slidesPerView={1}
                                 spaceBetween={30}
                                 centeredSlides={true}
                                 loop={true}
                                 grabCursor={true}
                                 autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                 }}
                                 pagination={{
                                    clickable: true,
                                 }}
                                 modules={[Autoplay]}
                                 className="mySwiper flex justify-center"
                              >
                                 <SwiperSlide>
                                    <img src={banJJK} alt="" className="  rounded shadow-lg" />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <img src={banBrodyMPL} alt="" className="  rounded shadow-lg" />
                                 </SwiperSlide>
                              </Swiper>
                           </div>
                        </div>
                     </div>
                     <div className="home-feeds-items mt-9">
                        <div className="product-list container">
                           <div className="product-list__title inline-flex flex-row">
                              <h1 className="text-4xl font-bold font-josefin">Populer</h1>
                           </div>
                           <div className="product-list__items flex flex-row flex-wrap">
                              {product.datas.map((data) => {
                                 return (
                                    <ProductListItem
                                       productTitle={data.title}
                                       imageUrl={data.imageUrl}
                                       link={data.link}
                                       key={data.title}
                                    />
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
}

export default Home;
