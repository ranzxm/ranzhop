import React from "react";
import ProductPage from "../../utils/ProductPage";
import LOLWRForm from "./LOLWRForm";
import LOLWRInfo from "./LOLWRInfo";
function LOLWRApp(props) {
   document.title = props.title;
   return (
      <>
         <ProductPage pageAppInfo={<LOLWRInfo />} pageAppForm={<LOLWRForm />} />
      </>
   );
}

export default LOLWRApp;
