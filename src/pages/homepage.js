import Banner from "../components/banner";
import {shownew} from "../components/newsList";


const Homepage={
    print(){
        return /* html */`
    <div class="container mx-auto">
         <div class="banner">
              ${Banner.print()}
           </div>    
           <h2 class="my-5">Tin tức học tập</h2>
           <div class="grid grid-cols-3 gap-8 ">
           
           ${shownew.print()}
           </div>
            
        </div>    
        </div>
    `;
    },
};
export default Homepage;