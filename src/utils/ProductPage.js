import React from "react";

function ProductPage(props) {
   return (
      <>
         <main className="product-page ranzhop__content min-h-screen">
            <div className="product__container container mx-auto">
               <div className="product__blocking flex flex-col md:flex-row md:mx-auto mx-4 relative">
                  {props.pageAppInfo}
                  {props.pageAppForm}
               </div>
            </div>
         </main>
      </>
   );
}

export default ProductPage;
