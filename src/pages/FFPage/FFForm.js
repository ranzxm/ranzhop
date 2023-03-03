import ProductForm, { BuySection, DenomList, PaymentMethod, UserInfo, VarTemplateForm } from "../../utils/ProductForm";
import { ProductFF } from "../../api/Product";
import { AlertFF } from "../../utils/AlertBuyGame";
import { BuyButtonFF } from "../../utils/BuyButton";
import ModalAlert from "../../utils/ModalAlert";

function FFForm() {
   const [price, setPrice] = VarTemplateForm().price;
   const [paymentMethod, setPaymentMethod] = VarTemplateForm().pay;
   const [playerId, setPlayerId] = VarTemplateForm().user;
   const [produkBeli, setProdukBeli] = VarTemplateForm().product;
   const filterAlert = AlertFF(playerId, produkBeli, paymentMethod).filter((fil) => fil.id === "");

   const helpUserIdFF =
      "Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di bawah nama karakter Anda. Contoh: '5363266446'.";

   return (
      <>
         {
            <ProductForm
               sectionUserInfo={
                  <UserInfo
                     titleSection="Masukkan Player ID"
                     inputUserType="ff"
                     helpGetUserId={helpUserIdFF}
                     playerid={setPlayerId}
                  />
               }
               sectionDenomList={<DenomList setProdukBeli={setProdukBeli} apiDenomList={ProductFF()} setPrice={setPrice} />}
               sectionPaymentMethod={<PaymentMethod price={price} setPaymentMethod={setPaymentMethod} />}
               sectionBuySection={<BuySection tombol={BuyButtonFF(playerId, paymentMethod, produkBeli, price)} />}
            />
         }
         {<ModalAlert alert={filterAlert} />}
      </>
   );
}

export default FFForm;
