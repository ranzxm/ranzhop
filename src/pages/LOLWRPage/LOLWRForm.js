import ProductForm, { BuySection, DenomList, PaymentMethod, UserInfo, VarTemplateForm } from "../../utils/ProductForm";
import { ProductLOLWR } from "../../api/Product";
import { BuyButtonLOLWR } from "../../utils/BuyButton";
import { AlertLOLWR } from "../../utils/AlertBuyGame";
import ModalAlert from "../../utils/ModalAlert";

function LOLWRForm() {
   const [riotId, setRiotId] = VarTemplateForm().riotid;
   const [produkBeli, setProdukBeli] = VarTemplateForm().product;
   const [paymentMethod, setPaymentMethod] = VarTemplateForm().pay;
   const [price, setPrice] = VarTemplateForm().price;

   const alert = AlertLOLWR(riotId, produkBeli, paymentMethod).filter((fil) => fil.id === "");

   const helpGetUserInfo =
      "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)";

   return (
      <>
         <ProductForm
            sectionUserInfo={
               <UserInfo
                  titleSection="Masukkan Riot ID"
                  inputUserType="lolwr"
                  helpGetUserId={helpGetUserInfo}
                  riotId={setRiotId}
               />
            }
            sectionDenomList={<DenomList apiDenomList={ProductLOLWR()} setPrice={setPrice} setProdukBeli={setProdukBeli} />}
            sectionPaymentMethod={<PaymentMethod price={price} setPaymentMethod={setPaymentMethod} />}
            sectionBuySection={<BuySection tombol={BuyButtonLOLWR(riotId, paymentMethod, produkBeli, price)} />}
         />
         {<ModalAlert alert={alert} />}
      </>
   );
}

export default LOLWRForm;
