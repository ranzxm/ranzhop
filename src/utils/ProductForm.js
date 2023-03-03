import MobileLegends from "./UserInfo/MobileLegends";
import FreeFire from "./UserInfo/FreeFire";
import GenshinImpact from "./UserInfo/GenshinImpact";
import LOLWildRift from "./UserInfo/LOLWildRift";

import { useState } from "react";

import ribbonPromo from "../images/ribbon-promo.png";
import qris from "../images/qris-method.png";
import verify from "../images/verify.svg";

export default function ProductForm(props) {
   // requirements :
   // 1. sectionUserInfo,
   // 2. sectionDenomList,
   // 3. sectionPaymentMethod,
   // 4. sectionBuySection
   return (
      <>
         <section className="product__form-pembelian md:w-2/3 w-full md:pl-4">
            <span>
               <form>
                  {props.sectionUserInfo}
                  {props.sectionDenomList}
                  {props.sectionPaymentMethod}
                  {props.sectionBuySection}
               </form>
            </span>
         </section>
      </>
   );
}

export function UserInfo(props) {
   // requirements :
   // 1. inputUserType, 6. playerid(FF)
   // 2. helpGetUserId, 7. uid(Genshin)
   // 3. titleSection,  8. server(Genshin)
   // 4. userid(MLBB),  9. riotId(LOLWR)
   // 5. zoneid(MLBB),
   const inputUser = () => {
      if (props.inputUserType === "ml") {
         return MobileLegends(props);
      } else if (props.inputUserType === "ff") {
         return FreeFire(props);
      } else if (props.inputUserType === "gi") {
         return GenshinImpact(props);
      } else if (props.inputUserType === "lolwr") {
         return LOLWildRift(props);
      }
   };
   return (
      <>
         <section className="user-info my-6 bg-[#2b2b2b] py-2 relative rounded">
            <h1>
               <span className="absolute -top-4 left-3 w-10 h-10 rounded-full border-4 border-[#2b2b2b] font-bold text-center bg-[#328843] leading-8">
                  1
               </span>
               <span className="ml-14 font-bold text-xl tracking-wider">{props.titleSection}</span>
            </h1>
            <div className="container px-4 mt-4">
               <div className="input-user w-full flex space-x-2">{inputUser()}</div>
               <div className="info my-2 pr-2">
                  <p className="text-xs italic opacity-75 tracking-wide">{props.helpGetUserId}</p>
               </div>
            </div>
         </section>
      </>
   );
}

export function DenomList(props) {
   // requirements :
   // 1. apiDenomList
   // 2. setPrice,
   // 3. setProdukBeli
   return (
      <>
         <section className="product-form__denom my-6 bg-[#2b2b2b] py-2 relative rounded">
            <h1>
               <span className="absolute -top-4 left-3 w-10 h-10 rounded-full border-4 border-[#2b2b2b] font-bold text-center bg-[#328843] leading-8">
                  2
               </span>
               <span className="ml-14 font-bold text-xl tracking-wider">Pilih Nominal Top-Up</span>
            </h1>
            <div className="container px-4 mt-4 w-full">
               <div className="product-item">
                  <div className="product-item__title">
                     <h1 className="font-medium">Pilih Item</h1>
                  </div>
                  <div className="product-item__list mt-5">
                     <ul className="flex flex-wrap items-start">
                        {props.apiDenomList.map((denomList) => {
                           return (
                              <li
                                 onClick={() => {
                                    props.setPrice(new Intl.NumberFormat("id-ID").format(denomList.price));
                                    props.setProdukBeli(denomList.name);

                                    const temps = document.querySelectorAll(".card-denom");
                                    const car = document.getElementById(denomList.id);
                                    const priceEl = document.getElementById("price-el");
                                    const alertPay = document.getElementById("alert-payment");

                                    Array.from(temps).map((temp) => {
                                       return temp.classList.remove("shadow-[#a55f5f]");
                                    });

                                    car.classList.add("shadow-[#a55f5f]");
                                    priceEl.classList.remove("hidden");
                                    alertPay.classList.add("hidden");
                                 }}
                                 className="lg:w-1/5 md:w-1/4 w-1/2 cursor-pointer pr-2 pb-2 text-center relative"
                                 key={denomList.id}
                              >
                                 <div
                                    id={denomList.id}
                                    className="card-denom shadow-md flex flex-col justify-center items-center h-36 bg-[#2e2e2e] border-[1px] rounded-lg border-[#616161]"
                                 >
                                    <div className="card-denom__image">
                                       <img src={denomList.img_url} alt="" className="w-12" />
                                    </div>
                                    <div className="card-denom__data mt-3">
                                       <h1 className="font-bold tracking-wider">{denomList.name}</h1>
                                    </div>
                                 </div>
                                 {(() => {
                                    if (denomList?.promo) {
                                       return (
                                          <>
                                             <div className="ribbon-promo absolute top-0 w-14 right-2">
                                                <img src={ribbonPromo} alt="" />
                                             </div>
                                          </>
                                       );
                                    } else {
                                       return "";
                                    }
                                 })()}
                              </li>
                           );
                        })}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export function PaymentMethod(props) {
   // requirements :
   // 1. price,
   // 2. setPaymentMethod

   return (
      <>
         <section className="product-form__payment-method my-6 bg-[#2b2b2b] py-2 relative rounded">
            <h1 className="relative">
               <span className="absolute -top-4 left-3 w-10 h-10 rounded-full border-4 border-[#2b2b2b] font-bold text-center bg-[#328843] leading-8">
                  3
               </span>
               <span className="ml-14 font-bold text-xl tracking-wider">Pilih Pembayaran</span>
               <span className="absolute md:right-5 md:top-2 hidden top-0 -right-3" id="alert-payment">
                  <p className="text-xs sm:w-full text-red-400 w-36">Silahkan pilih produk terlebih dahulu</p>
               </span>
            </h1>
            <ul>
               <li className="my-3 mx-4 border-[1px] border-[#616161] rounded-md">
                  <a
                     onClick={(e) => {
                        e.preventDefault();
                        const verifyPay = document.getElementById("verify-payment");
                        const alertPay = document.getElementById("alert-payment");

                        if (props.price === "") {
                           alertPay.classList.remove("hidden");
                        } else {
                           verifyPay.classList.remove("hidden");
                           props.setPaymentMethod("QRIS");
                        }
                     }}
                     href="@"
                     className="flex flex-wrap relative overflow-hidden min-h-[72px] px-3 items-center justify-between"
                  >
                     <div className="kanan md:basis-3/4 basis-2/3">
                        <figure>
                           <img src={qris} alt="qris" className="bg-white rounded h-8" />
                        </figure>
                     </div>
                     <div className="kiri md:basis-1/4 basis-1/3 hidden" id="price-el">
                        <div className="kiri-title">
                           <h1 className="font-medium opacity-60">Harga</h1>
                           <h1 className="font-bold tracking-wide">Rp. {props.price}</h1>
                        </div>
                     </div>
                     <span className="absolute top-3 right-3 hidden" id="verify-payment">
                        <img src={verify} alt="" className="w-6" />
                     </span>
                  </a>
               </li>
            </ul>
         </section>
      </>
   );
}

export function BuySection(props) {
   // reqiurements :
   // 1. tombol
   return (
      <>
         <section className="product-form__contact-and-buy my-6 bg-[#2b2b2b] py-2 relative rounded">
            <h1>
               <span className="absolute -top-4 left-3 w-10 h-10 rounded-full border-4 border-[#2b2b2b] font-bold text-center bg-[#328843] leading-8">
                  4
               </span>
               <span className="ml-14 font-bold text-xl tracking-wider">Beli !</span>
            </h1>
            <div className="input-whatsapp-number mx-4">
               <div className="input-wa__number mt-5">
                  <label></label>
                  <input
                     type="number"
                     placeholder="Masukkan nomor whatsapp anda"
                     className="placeholder:text-center placeholder:opacity-75 w-full text-center bg-[#1b1b1b] h-12 outline-none rounded"
                  />
               </div>
               <div className="note-user">
                  <p className="text-sm italic opacity-60 mt-2">
                     Setelah anda menekan tombol beli anda akan langsung diarahkan ke whatsapp Penjual untuk melanjutkan transaksi
                  </p>
               </div>
            </div>
            <div className="button-con mx-4 my-3 flex flex-col items-end">
               <button
                  className="bg-[#328843] w-56 rounded-full py-2"
                  type="submit"
                  onClick={(e) => {
                     e.preventDefault();
                     props.tombol();
                  }}
               >
                  Beli Sekarang
               </button>
            </div>
         </section>
      </>
   );
}

export function VarTemplateForm() {
   const [price, setPrice] = useState("");
   const [paymentMethod, setPaymentMethod] = useState("");
   const [riotId, setRiotId] = useState("");
   const [uid, setUid] = useState("");
   const [server, setServer] = useState("");
   const [playerId, setPlayerId] = useState("");
   const [userId, setUserId] = useState("");
   const [zoneId, setZoneId] = useState("");
   const [produkBeli, setProdukBeli] = useState("");
   return {
      price: [price, setPrice],
      pay: [paymentMethod, setPaymentMethod],
      riotid: [riotId, setRiotId], //LOL: WILD RIFT
      uid: [uid, setUid], //GENSHIN IMPACT
      server: [server, setServer], //GENSHIN IMPACT
      playerId: [playerId, setPlayerId], //FREE FIRE
      user: [userId, setUserId], //MOBILE LEGENDS
      zone: [zoneId, setZoneId], //MOBILE LEGENDS
      product: [produkBeli, setProdukBeli],
   };
}
