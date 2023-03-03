export function AlertMLBB(userId, zoneId, produkBeli, paymentMethod) {
   const alertBuy = [
      {
         key: 1,
         id: userId,
         text: "User ID tidak boleh kosong!",
      },
      {
         key: 2,
         id: zoneId,
         text: "Zone ID tidak boleh kosong!",
      },
      {
         key: 3,
         id: produkBeli,
         text: "Pilih salah satu voucher item",
      },
      {
         key: 3,
         id: paymentMethod,
         text: "Pilih salah satu metode pembayaran",
      },
   ];
   return alertBuy;
}

export function AlertFF(playerId, produkBeli, paymentMethod) {
   const alertBuy = [
      {
         key: 1,
         id: playerId,
         text: "Player ID tidak boleh kosong!",
      },
      {
         key: 2,
         id: produkBeli,
         text: "Pilih salah satu voucher item",
      },
      {
         key: 3,
         id: paymentMethod,
         text: "Pilih salah satu metode pembayaran",
      },
   ];
   return alertBuy;
}

export function AlertGI(uid, server, produkBeli, paymentMethod) {
   const AlertBuy = [
      {
         key: 1,
         id: uid,
         text: "UID tidak boleh kosong!",
      },
      {
         key: 2,
         id: server,
         text: "Server tidak boleh kosong!",
      },
      {
         key: 3,
         id: produkBeli,
         text: "Pilih salah satu voucher item",
      },
      {
         key: 4,
         id: paymentMethod,
         text: "Pilih salah satu metode pembayaran",
      },
   ];
   return AlertBuy;
}

export function AlertLOLWR(riotId, produkBeli, paymentMethod) {
   const alertBuy = [
      {
         key: 1,
         id: riotId,
         text: "Riot ID tidak boleh kosong!",
      },
      {
         key: 2,
         id: produkBeli,
         text: "Pilih salah satu voucher item",
      },
      {
         key: 3,
         id: paymentMethod,
         text: "Pilih salah satu metode pembayaran",
      },
   ];
   return alertBuy;
}
