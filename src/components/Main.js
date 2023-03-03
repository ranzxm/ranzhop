import Home from "../pages/Home";
import MLBBApp from "../pages/MLBBPage/MLBBApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FFApp from "../pages/FFPage/FFApp";
import GenshinApp from "../pages/GenshinPage/GenshinApp";
import LOLWRApp from "../pages/LOLWRPage/LOLWRApp";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
      errorElement: (
         <>
            <div className="min-h-screen flex flex-col justify-center items-center text-center">
               <h1 className="font-medium text-6xl mb-4">404 NOT FOUND</h1>
               <a href="/" className="underline text-blue-400">
                  kembali halaman utama
               </a>
            </div>
         </>
      ),
   },
   {
      path: "mobile-legends",
      element: <MLBBApp title="Top Up Mobile Legends: Bang-Bang Murah | Mobile Legends: Bang-Bang | Ranzhop" />,
   },
   {
      path: "free-fire",
      element: <FFApp title="Top Up Free Fire Murah | Free Fire | Ranzhop" />,
   },
   {
      path: "genshin-impact",
      element: <GenshinApp title="Top Up Genshin Impact Murah | Genshin Impact | Ranzhop" />,
   },
   {
      path: "wild-rift",
      element: <LOLWRApp title="Top Up League Of Legends Wild Rift Murah | League Of Legends Wild Rift | Ranzhop" />,
   },
]);

function Main() {
   return (
      <>
         <div className="ranzhop-content-wrapper min-h-screen">
            <RouterProvider router={router} />
         </div>
      </>
   );
}

export default Main;
