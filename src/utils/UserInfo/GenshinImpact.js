import React from "react";

function GenshinImpact(props) {
   // props 1. uid, 2. server
   return (
      <>
         <div className="input-userid">
            <label></label>
            <input
               type="number"
               onChange={(e) => {
                  props.uid(e.target.value);
               }}
               placeholder="Masukkan UID"
               className="placeholder:text-center placeholder:opacity-75 w-full text-center bg-[#1b1b1b] h-12 outline-none rounded"
            />
         </div>
         <div className="input-server">
            <label></label>
            <select
               onChange={(e) => {
                  props.server(e.target.value);
               }}
               defaultValue={"none"}
               className="placeholder:text-center min-w-[181px] text-center bg-[#1b1b1b] h-12 outline-none rounded "
            >
               <option value="none" disabled hidden>
                  Pilih Server
               </option>
               <option value="Asia">Asia</option>
               <option value="America">America</option>
               <option value="Europe">Eropa</option>
               <option value="TWHKMO">TW, HK, MO</option>
            </select>
         </div>
      </>
   );
}

export default GenshinImpact;
