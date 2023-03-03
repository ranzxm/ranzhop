import ProductForm, { UserInfo, DenomList, PaymentMethod, BuySection } from "../../utils/ProductForm";
import { VarTemplateForm } from "../../utils/ProductForm";
import { AlertMLBB } from "../../utils/AlertBuyGame";
import { ProductMLBB } from "../../api/Product";
import ModalAlert from "../../utils/ModalAlert";

function MLBBForm() {
   const [price, setPrice] = VarTemplateForm().price;
   const [paymentMethod, setPaymentMethod] = VarTemplateForm().pay;
   const [userId, setUserId] = VarTemplateForm().user;
   const [zoneId, setZoneId] = VarTemplateForm().zone;
   const [produkBeli, setProdukBeli] = VarTemplateForm().product;
   const filterAlert = AlertMLBB(userId, zoneId, produkBeli, paymentMethod).filter((fil) => fil.id === "");

   const pesan = `[MOBILE LEGENDS] Permisi, saya mau beli ${produkBeli}, ${userId}(${zoneId}) dengan pembayaran ${paymentMethod} harga Rp. ${price}`;

   const helpGetUserIdMLBB =
      "Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).";

   const tombolBeli = () => {
      if (userId === "" || zoneId === "" || paymentMethod === "" || produkBeli === "") {
         // modal alert empty form function
         const modalEl = document.getElementById("modal");
         const modalCard = document.getElementById("modal-card");

         modalEl.classList.toggle("flex");
         modalEl.classList.toggle("hidden");
         modalCard.scrollIntoView();
      } else {
         window.open(`https://api.whatsapp.com/send?phone=6287878079915&text=${pesan}`, "_blank");
      }
   };

   // modal alert empty form function
   window.onclick = function (event) {
      const modalEl = document.getElementById("modal");
      if (event.target === modalEl) {
         modalEl.classList.toggle("flex");
         modalEl.classList.toggle("hidden");
      }
   };
   return (
      <>
         {
            <ProductForm
               sectionUserInfo={
                  <UserInfo
                     titleSection="Masukkan User ID"
                     inputUserType="ml"
                     userid={setUserId}
                     zoneid={setZoneId}
                     helpGetUserId={helpGetUserIdMLBB}
                  />
               }
               sectionDenomList={<DenomList apiDenomList={ProductMLBB()} setPrice={setPrice} setProdukBeli={setProdukBeli} />}
               sectionPaymentMethod={<PaymentMethod setPaymentMethod={setPaymentMethod} price={price} />}
               sectionBuySection={<BuySection tombol={tombolBeli} />}
            />
         }
         {<ModalAlert alert={filterAlert} id={1} />}
      </>
   );
}

export default MLBBForm;
