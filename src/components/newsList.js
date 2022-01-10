import show from "../data";

export const shownew ={
    print(){
        return /* html */`
        
     
         ${show.map((post)=>/* html */ `
         <div class="border shadow rounded p-4">
              <a href="">
                <img
                  src="${post.img}"
                  alt=""
                  class="w-full"
                />
              </a>
              <h3 class="my-3">
                <a href="" class="text-orange-500 font-bold ">${post.name}</a>
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

export const shownews ={
    print(){
        return /* html */`
       ${show.map((post)=>/* html */ `
       <div class="border shadow rounded p-4">
            <a href="">
              <img
                src="${post.img}"
                alt=""
                class="w-full"
              />
            </a>
            <h3 class="my-3">
              <a href="" class="text-orange-500 font-bold ">${post.name}</a>
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

