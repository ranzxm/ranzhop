import MLBBBannerInfo from "../../images/mlbb-banner-info.jpg";
import ProductDesc from "../../utils/ProductDesc";

function MLBBInfo() {
   const desc1 =
      "Ranzhop telah bekerja sama dengan Moonton untuk menawarkan top up Mobile Legends dengan mudah, aman dan nyaman.";
   const desc2 =
      "Top up ML Diamond, Twilight Pass and Weekly Pass hanya dalam hitungan detik! Cukup masukan User ID dan ZoneID MLBB Anda, pilih jumlah Diamond yang Anda inginkan, selesaikan pembayaran, dan Diamond akan secara langsung ditambahkan ke akun Mobile Legends Anda.";
   return (
      <>
         <ProductDesc productTitle="Mobile Legends : Bang Bang" banner={MLBBBannerInfo} desc1={desc1} desc2={desc2} />
      </>
   );
}

export default MLBBInfo;
