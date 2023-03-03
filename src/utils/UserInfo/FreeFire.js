function FreeFire(props) {
   return (
      <>
         <div className="input-playerId">
            <label></label>
            <input
               type="number"
               onChange={(e) => {
                  props.playerid(e.target.value);
               }}
               placeholder="Masukkan Player ID"
               className="placeholder:text-center placeholder:opacity-75 w-full text-center bg-[#1b1b1b] h-12 outline-none rounded"
            />
         </div>
      </>
   );
}

export default FreeFire;
