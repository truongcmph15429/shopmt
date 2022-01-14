
import Navigo from "navigo";
import DetaiPage from "./pages/DetaiPage";
import HomePage from "./pages/homepage";
import productnew from "./pages/Admin/adminproduct";
import productedit from "./pages/Admin/editproduct";
import productadd from "./pages/Admin/productadd";
import singin from "./pages/Admin/singin";
import singup from "./pages/Admin/singup";
import Dashboard from "./pages/dashboard";
import AdminNews from "./pages/Admin/adminproduct";
import About from "./pages/About";
import AdminNewsAdd from "./pages/Admin/productadd";

const router= new Navigo("/",{linksSelector:"a"});

const result = (content)=>{
    document.getElementById("app").innerHTML =content;
};

router.on({
    "/": () =>{
        result(HomePage.print());
    },
    "/admin/product/add": () => {
        result(productadd.print());
    },
    "/admin/singin": () => {
        result(singin.print());
    },
    "/admin/singup": () => {
        result(singup.print());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        result(DetaiPage.print(id));
    },
    "/admin/product": ()=> {
        result(productnew.print());
    },
    "/admin/product/:id/edit": ({data}) =>{
        const {id} =data;
        result(productedit.print(id));
    },
    "/admin/dashboard": () => {
        result(Dashboard.print());
    },
    "/admin/news": () => {
        result(AdminNews.print());
    },
    "/About": ()=>{
        result(About.print());
    },
    "/admin/news/add": () =>{
        result(AdminNewsAdd.print());
    },
});
router.resolve();