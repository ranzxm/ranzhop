import ProductForm, { BuySection, DenomList, PaymentMethod, UserInfo, VarTemplateForm } from "../../utils/ProductForm";
import { ProductGI } from "../../api/Product";
import { BuyButtonGenshin } from "../../utils/BuyButton";
import ModalAlert from "../../utils/ModalAlert";
import { AlertGI } from "../../utils/AlertBuyGame";

function GenshinForm() {
   const [uid, setUid] = VarTemplateForm().uid;
   const [server, setServer] = VarTemplateForm().server;
   const [produkBeli, setProdukBeli] = VarTemplateForm().product;
   const [paymentMethod, setPaymentMethod] = VarTemplateForm().pay;
   const [price, setPrice] = VarTemplateForm().price;
   const alert = AlertGI(uid, server, produkBeli, paymentMethod).filter((fil) => fil.id === "");

   const helpGetUserInfo =
      "Untuk menemukan UID Anda, masuk pakai akun Anda. Klik pada tombol profile di pojok kiri atas layar. Temukan UID dibawah avatar. Masukan UID Anda di sini. Selain itu, Anda juga dapat temukan UID Anda di pojok bawah kanan layar.";

   return (
      <>
         <ProductForm
            sectionUserInfo={
               <UserInfo
                  inputUserType="gi"
                  titleSection="Masukkan UID dan Server"
                  helpGetUserId={helpGetUserInfo}
                  uid={setUid}
                  server={setServer}
               />
            }
            sectionDenomList={<DenomList apiDenomList={ProductGI()} setPrice={setPrice} setProdukBeli={setProdukBeli} />}
            sectionPaymentMethod={<PaymentMethod price={price} setPaymentMethod={setPaymentMethod} />}
            sectionBuySection={<BuySection tombol={BuyButtonGenshin(uid, server, paymentMethod, produkBeli, price)} />}
         />
         {<ModalAlert alert={alert} />}
      </>
   );
}

export default GenshinForm;
