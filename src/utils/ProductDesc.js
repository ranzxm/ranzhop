function ProductDesc(props) {
   // requirements : 1. banner, 2. productTitle, 3. desc1, 4. desc2.
   return (
      <>
         <section className="product__info md:w-4/12 w-full mt-6 md:pr-4 md:pl-2">
            <div className="product-banner-container container">
               <img src={props.banner} alt="mlbbbanner" />
            </div>
            <div className="product-description">
               <h1 className="font-bold font-josefin tracking-wide text-xl mt-5 ">{props.productTitle}</h1>
               <div className="description font-josefin md:h-full h-[5.5rem] overflow-hidden" id="desc-product">
                  <p className="my-4">{props.desc1}</p>
                  <p className="my-4">{props.desc2}</p>
               </div>
               <h1
                  className="font-medium underline flex md:hidden mt-2 cursor-pointer text-sm"
                  onClick={(e) => {
                     const descProduct = document.getElementById("desc-product");
                     descProduct.classList.toggle("h-[5.5rem]");
                     if (e.target.innerHTML == "Tampilkan lebih banyak") {
                        e.target.innerHTML = "Tampilkan lebih sedikit";
                     } else {
                        e.target.innerHTML = "Tampilkan lebih banyak";
                     }
                  }}
               >
                  Tampilkan lebih banyak
               </h1>
            </div>
         </section>
      </>
   );
}

export default ProductDesc;
