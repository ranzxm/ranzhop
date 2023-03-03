import ProductDesc from "../../utils/ProductDesc";
import ffBanner from "../../images/ff-banner.jpg";
function FFInfo() {
   const desc1 =
      "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.";
   const desc2 =
      "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Ranzshop! Harga sudah termasuk PPN";

   return <>{<ProductDesc banner={ffBanner} productTitle="Free Fire Top Up" desc1={desc1} desc2={desc2} />}</>;
}

export default FFInfo;
