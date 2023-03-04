function ModalAlert(props) {
   // props 1. alert
   return (
      <>
         <div
            className="modal--container hidden backdrop-blur-sm absolute w-full h-full bg-opacity-30  items-center justify-center"
            id="modal"
            key={props.id}
         >
            <div className="modal--card bg-[#1b1b1b] w-96 rounded overflow-hidden " id="modal-card">
               <div className="modal-title px-3 py-2 bg-green-600">
                  <h1 className="text-xl font-medium flex items-center relative ">
                     Peringatan{" "}
                     <span
                        onClick={() => {
                           const modalEl = document.getElementById("modal");
                           modalEl.classList.toggle("flex");
                           modalEl.classList.toggle("hidden");
                        }}
                        className="absolute cursor-pointer right-0 top-0 w-6 h-6 inline-flex justify-center rounded-full leading-6 text-black "
                     >
                        &#215;
                     </span>
                  </h1>
               </div>
               <div className="modal-field px-3 py-3">
                  <ul>
                     {props.alert.map((tes, index) => {
                        return (
                           <>
                              <li key={index}>
                                 <span className=" text-red-500 cursor-default ">&#215;</span> {tes.text}
                              </li>
                           </>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}

export default ModalAlert;
