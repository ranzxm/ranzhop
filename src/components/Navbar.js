import logoW from "../images/rzl-w.png";
// import logoB from "../images/rzl-b.png";

function Navbar() {
   return (
      <>
         <nav className="bg-[#2e2e2e] h-12 flex items-center">
            <div className="container md:mx-auto mx-4 flex justify-center items-center">
               <figure>
                  <a href="/">
                     <img src={logoW} alt="logo" className="w-32" />
                  </a>
               </figure>
               {/* <div className=" font-josefin flex items-center bg-[#1e1e1e] px-2 rounded" id="search-bar">
                  <input
                     type="text"
                     id="input-search"
                     className="bg-[#1e1e1e] outline-none duration-300 hidden p-1 rounded"
                     placeholder="Cari di Ranzhop"
                  />
                  <figure
                     onClick={() => {
                        const inputSearch = document.getElementById("input-search");
                        inputSearch.classList.toggle("hidden");
                        inputSearch.value = "";
                     }}
                     className="cursor-pointer"
                  >
                     <img src={searchSVG} alt="" className="w-7" />
                  </figure>
               </div> */}
            </div>
         </nav>
      </>
   );
}

export default Navbar;
