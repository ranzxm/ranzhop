export function BuyButtonGenshin(uid, server, paymentMethod, produkBeli, price) {
   const pesan = `[GENSHIN IMPACT] Permisi, saya mau beli ${produkBeli}, ${uid}(${server}) dengan pembayaran ${paymentMethod} harga Rp. ${price}`;
   const tombolBeli = () => {
      if (uid === "" || server === "" || paymentMethod === "" || produkBeli === "") {
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
   return tombolBeli;
}

export function BuyButtonLOLWR(riotid, paymentMethod, produkBeli, price) {
   const pesan = `[LOL: WILD RIFT] Permisi, saya mau beli ${produkBeli}, ${riotid} dengan pembayaran ${paymentMethod} harga Rp. ${price}`;
   const tombolBeli = () => {
      if (riotid === "" || paymentMethod === "" || produkBeli === "") {
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
   return tombolBeli;
}

export function BuyButtonFF(playerId, paymentMethod, produkBeli, price) {
   const pesan = `[FREE FIRE] Permisi, saya mau beli ${produkBeli}, ${playerId} dengan pembayaran ${paymentMethod} harga Rp. ${price} `;

   const tombolBeli = () => {
      if (playerId === "" || paymentMethod === "" || produkBeli === "") {
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
   return tombolBeli;
}

export function BuyButtonMLBB(userId, zoneId, paymentMethod, produkBeli, price) {
   const pesan = `[MOBILE LEGENDS] Permisi, saya mau beli ${produkBeli}, ${userId}(${zoneId}) dengan pembayaran ${paymentMethod} harga Rp. ${price}`;

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
   return tombolBeli;
}
