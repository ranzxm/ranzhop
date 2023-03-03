import ProductPage from "../../utils/ProductPage";
import FFForm from "./FFForm";
import FFInfo from "./FFInfo";

function FFApp(props) {
   document.title = props.title;
   return <>{<ProductPage pageAppInfo={<FFInfo />} pageAppForm={<FFForm />} />}</>;
}

export default FFApp;
