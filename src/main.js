
import Navigo from "navigo";
import DetaiPage from "./pages/DetaiPage";
import HomePage from "./pages/homepage";
import Header from "./components/herder";
import foodter from "./components/foodter";
import productnew from "./pages/Admin/adminproduct";
import productedit from "./pages/Admin/editproduct";
import productadd from "./pages/Admin/productadd";
import singin from "./pages/Admin/singin";
import singup from "./pages/Admin/singup";
import Dashboard from "./pages/Admin/dashboard";

const router= new Navigo("/",{linksSelector:"a"});

const result = (content)=>{
    document.querySelector("#header").innerHTML = Header.print();
    document.getElementById("app").innerHTML =content;
    document.querySelector("#foodter").innerHTML = foodter.print();
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

});
router.resolve();