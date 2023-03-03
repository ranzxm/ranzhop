import genshinBanner from "../../images/genshinBanner.png";
import ProductDesc from "../../utils/ProductDesc";

function GenshinInfo() {
   const desc1 = () => {
      return (
         <>
            <b>Bonus Top up Perdana</b>
            <br />
            Jika Karakter-mu dalam game belum pernah melakukan Top up melalui platform mana pun, kamu bisa:
            <br />
            Top up 60 Genesis Crystal untuk mendapatkan 120 Genesis Crystal;
            <br />
            Top up 300+30 Genesis Crystal untuk mendapatkan 600 Genesis Crystal;
            <br />
            Top up 980+110 Genesis Crystal untuk mendapatkan 1,960 Genesis Crystal; Top up 1,980+260 Genesis Crystal untuk
            mendapatkan 3,960 Genesis Crystal;
         </>
      );
   };

   return (
      <>
         <ProductDesc banner={genshinBanner} productTitle="Genshin Impact" desc1={desc1()} />
      </>
   );
}

export default GenshinInfo;
