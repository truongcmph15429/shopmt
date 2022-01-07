
import {menus,show} from "./data.js";

var showproduct= ()=>{
    var appElemane=document.getElementById("app");
    if(appElemane){
        const result=show.map(item=>{
            return `
            <div class="border shadow rounded p-4">
              <a href="">
                <img
                  src="${item.img}"
                  alt=""
                  class="w-full"
                />
              </a>
              <h3 class="my-3">
                <a href="" class="text-orange-500 font-bold ">${item.name}</a>
              </h3>
              <p class="text-xs">
                ${item.desc}
              </p>
            </div>
                `; 
        }).join("");
        appElemane.innerHTML =result;
    }
};
showproduct();

var showproductt= ()=>{
    var appElemane=document.getElementById("appp");
    if(appElemane){
        const result=show.map(item=>{
            return `
          <div class="border shadow rounded p-4">
            <a href="">
              <img
                src="${item.img}"
                alt=""
                class="w-full"
              />
            </a>
            <h3 class="my-3">
              <a href="" class="text-orange-500 font-bold ">${item.name}</a>
            </h3>
            <p class="text-xs">
              ${item.desc}
            </p>
          </div>
              `; 
        }).join("");
        appElemane.innerHTML =result;
    }
};
showproductt();

const showmenu=()=>{
    const menulist=document.getElementById("menu");
    if(menulist){
        const result=menus.map((list)=>{
            return`
            <li><a
                class="text-xs px-9 text-white block py-4 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="">${list}</a></li>
            <li>
            `;
        }).join("");
        menulist.innerHTML =result;
    }
};

showmenu();
// import Navigo from "navigo";
// const router = new Navigo("/", { linksSelector: "a" });
// router.on({
//     // Nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
//     "/": () => console.log("home page"),
//     "/about": () => console.log("About page"),
//     "/product": () => console.log("Product Page"),
// });
// router.notFound(() => console.log("not found page"));

// router.resolve();