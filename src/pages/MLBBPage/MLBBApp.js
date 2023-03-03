import MLBBInfo from "./MLBBInfo";
import MLBBForm from "./MLBBForm";
import ProductPage from "../../utils/ProductPage";

function MLBBApp(props) {
   document.title = props.title;
   return (
      <>
         <ProductPage pageAppInfo={<MLBBInfo />} pageAppForm={<MLBBForm />} />
      </>
   );
}

export default MLBBApp;
