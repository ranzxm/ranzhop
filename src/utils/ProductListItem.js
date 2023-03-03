import { Link } from "react-router-dom";
import wave from "../images/wave.svg";

// requirements : 1. link, 2. imageUrl, 3. productTitle

function ProductListItem(props) {
   return (
      <>
         <div className="product-tile__item-container lg:w-1/6 md:w-1/5 sm:w-1/4 w-1/3 pr-2 flex justify-center my-3">
            <Link
               to={props.link}
               className="inline-flex max-w-[178px] h-auto flex-col rounded-lg overflow-hidden bg-[#2b2b2b]"
               onClick={() => {
                  window.scrollTo(0, 0);
               }}
            >
               <div className="product-tile__image relative ">
                  <img src={props.imageUrl} alt="item-image" className="" />
                  <img src={wave} alt="" className="absolute -bottom-1 " />
               </div>
               <h1 className="product-tile__title flex items-center justify-center text-center font-bold tracking-wide my-0 p-2 text-xs sm:text-base">
                  {props.productTitle}
               </h1>
            </Link>
         </div>
      </>
   );
}

export default ProductListItem;
