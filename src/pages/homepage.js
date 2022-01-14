import Banner from "../components/banner";
import foodter from "../components/foodter";
import Header from "../components/herder";
import {shownew} from "../components/newsList";


const Homepage={
    print(){
        return /* html */`
    <div class="container mx-auto">
        <div>
        ${Header.print()}
        </div>
         <div class="banner">
              ${Banner.print()}
           </div>    
           <h2 class="my-5">Tin tức học tập</h2>
           <div class="grid grid-cols-3 gap-8 ">
           
           ${shownew.print()}
           </div>
           <div>
           ${foodter.print()}
           </div>
        </div>    
        </div>
    `;
    },
};
export default Homepage;