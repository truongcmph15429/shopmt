
import Navigo from "navigo";
import Ctdaotao from "./pages/ctdaotao";
import HomePage from "./pages/homepage";
import Gocsv from "./pages/gocsinhvien";
import Tuyendung from "./pages/tuyendung";
import Tuyensinh from "./pages/tuyensinh";
import Header from "./components/herder";
import foodter from "./components/foodter";


const router= new Navigo("/",{linksSelector:"a"});

const result = (content)=>{
    document.querySelector("#header").innerHTML = Header.print();
    document.getElementById("app").innerHTML =content.print();
    document.querySelector("#foodter").innerHTML = foodter.print();
};

router.on({
    "/": () =>{
        result(HomePage);
    },
    "/tuyensinh": () => {
        result(Tuyensinh);
    },
    "/ctdaotao": () => {
        result(Ctdaotao);
    },
    "/gocsv": ()=> {
        result(Gocsv);
    },
    "/tuyendung": () =>{
        result(Tuyendung);
    }

});
router.resolve();