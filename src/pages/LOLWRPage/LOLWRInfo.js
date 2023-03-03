import ProductDesc from "../../utils/ProductDesc";
import LOLWRBanner from "../../images/LOLWRBanner.png";
function LOLWRInfo() {
   const desc1 =
      "Top up LOL Wild Rift dalam hitungan detik! Cukup masukan Riot ID Anda, pilih jumlah Wild Core yang Anda inginkan, pilih metode pembayaran dan selesaikan transaksi Anda. Wild Core akan otomatis masuk ke akun League of Legends: Wild Rift Anda.";

   return (
      <>
         <ProductDesc banner={LOLWRBanner} productTitle="League of Legends: Wild Rift" desc1={desc1} />
      </>
   );
}

export default LOLWRInfo;
