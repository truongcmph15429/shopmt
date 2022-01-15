const Header = {
    print(){
        return/* html */ `
        
        <div class="bg-blue-800 py-5">
        <a href="#"><img class="w-40 mx-auto" src="./src/img/FPT_Polytechnic.png" alt=""></a>
      </div>
      <div class="flex bg-orange-600 justify-between align-center ">
        <nav class="">
        <ul class="flex" >
        <li><a
                class="text-xs px-9 text-white block py-4 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/">Home</a>
            <li>
            <li><a
                class="text-xs px-9 text-white block py-4 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/About">About</a>
            <li>
            <li><a
                class="text-xs px-9 text-white block py-4 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/news/page">News</a>
            <li>
            <li><a
                class="text-xs px-9 text-white block py-4 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/admin/singin">Sing in</a>
            <li>
            <li><a
                class="text-xs px-9 text-white block py-4 hover:text-black hover:bg-blue-100 transition duration-300 ease-in-out font-sans"
                href="/admin/dashboard">Admin</a>
            <li>
          </ul>
    
        </nav>
        <form action="" class="py-2 px-2 flex">
          <input type="text" class="w-70 mx-2 outline-none ">
          <button class="text-xs text-white bg-blue-800 py-1  px-2 border-white-400 border-2">Tìm kiếm</button>
        </form>
      </div>
  
        `;
    },
};

export default Header;