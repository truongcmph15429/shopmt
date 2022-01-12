import show from "../data";


export const shownew ={
    print(){
        return /* html */`
         ${show.map((post)=>/* html */ `
         <div class="border shadow rounded p-4">
              </a>
              <h3 class="my-3">
              <a href="/product/${post.id}"><img src="${post.img}" alt="" /></a>
              </h3>
              <p class="text-xs">
                ${post.desc}
              </p>
            </div>
            `
    ).join("")}
    
        `;
    },
};


  


