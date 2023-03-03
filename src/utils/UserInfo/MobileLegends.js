function MobileLegends(props) {
   return (
      <>
         <div className="input-userid">
            <label></label>
            <input
               type="number"
               onChange={(e) => {
                  props.userid(e.target.value);
               }}
               placeholder="Masukkan User ID"
               className="placeholder:text-center placeholder:opacity-75 w-full text-center bg-[#1b1b1b] h-12 outline-none rounded"
            />
         </div>
         <div className="input-zoneid">
            <label></label>
            <input
               type="number"
               onChange={(e) => {
                  props.zoneid(e.target.value);
               }}
               placeholder="Zona ID"
               className="placeholder:text-center placeholder:opacity-75 w-full text-center bg-[#1b1b1b] h-12 outline-none rounded"
            />
         </div>
      </>
   );
}

export default MobileLegends;
