import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MeditationArticles from "./pages/MeditationArticles";
import MeditationDetail from "./pages/MeditationDetail";
import RecentMeditations from "./pages/RecentMeditations";
import OfferingPage from "./pages/OfferingPage";

;




const router = createBrowserRouter([
           {
        path: "/",
        element: <Layout />,
        children: [
          {
        index: true,        // ← route par défaut
        element: <Events /> // ← Events s’affiche dans le Layout
      },
          {
            path: "/events",
             element: <Events />
          },
          {
            path: "/contact",
             element: <Contact />
          },    
          {
          path: "/about",
          element: <About />
          },
          {
          path: "/meditations",
          element: <MeditationArticles />
          },
           {
          path: "/recententemeditations",
          element: <RecentMeditations />
          },
            {
          path: "/offrandes",
          element: <OfferingPage />
          },
           {
          path: "/meditations/:id",
          element: <MeditationDetail />
          }
          
        
          
        ],
      },
      // {
      //   path: "/",
      //   element: <Dashboard/>,
      //   children: [
      //     {
      //       path: "/dashboard",
      //       element:   <HomeDashboard/> 
      //     },
      //     {
      //       path: "/creatadminform",
      //       element: <CreateAdminForm/>,
      //     },
      //     {
      //       path: "/adminlist",
      //       element: <AdminList/>,
      //     },

      //     {
      //       path: "/productform",
      //       element: <ProductForm/>,
      //     },
      //     {
      //       path: "/categoryform",
      //       element: <CategoryForm/>,
      //     },
      //     {
      //       path: "/stocklist",
      //       element: <Stocklist/>,
      //     },
      //     {
      //       path: "/liste_products",
      //       element: <ProductList/>,
      //     },
         
      //     {
      //       path: "/supplierform",
      //       element: <SupplierForm/>,
      //     },
      //     {
      //       path: "/supplyform",
      //       element: <SupplyForm/>,
      //     },
      //     {
      //       path: "/orderformDashboard",
      //       element: <OrderFormDashboard/>,
      //     },
      //     {
      //       path: "/invoicelist/dashboard",
      //       element: <InvoicelistDashboard/>,
      //     },
      //      {
      //       path: "/historique/dashboard",
      //       element: <AdminHistory/>,
      //     },
      //     {
      //       path: "/dashboard/invoices/:id",
      //       element: <InvoiceDetails/>,
      //     },
      //     {
      //       path: "/sales/dashboard",
      //       element: <SalesDashboard/>,
      //     },
    
      //   ]
      // }
     
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);