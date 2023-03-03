import React from "react";
import ProductPage from "../../utils/ProductPage";
import GenshinInfo from "./GenshinInfo";
import GenshinForm from "./GenshinForm";

function GenshinApp(props) {
   document.title = props.title;
   return <>{<ProductPage pageAppInfo={<GenshinInfo />} pageAppForm={<GenshinForm />} />}</>;
}

export default GenshinApp;
