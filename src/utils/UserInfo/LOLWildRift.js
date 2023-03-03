import React from "react";

function LOLWildRift(props) {
   return (
      <>
         <div className="input-riotid">
            <label></label>
            <input
               type="text"
               onChange={(e) => {
                  props.riotId(e.target.value);
               }}
               placeholder="Masukkan Riot ID"
               className="placeholder:text-center placeholder:opacity-75 w-full text-center bg-[#1b1b1b] h-12 outline-none rounded"
            />
         </div>
      </>
   );
}

export default LOLWildRift;
