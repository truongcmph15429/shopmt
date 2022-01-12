import data from "../../data";

const productedit = {
    print(id){
        const result = data.find((post) => post.id === id);
        return /* html */`
        <form  action="">
        <input class=" my-5" type="text" value="${result.title}"> <br>
        <img src="${result.img}" alt=""> <br>
        <input type="file"><br>
        <textarea class="border-2 my-5" cols="30" rows="10">${result.desc}</textarea> <br>
        <button class="btn">Cập nhật</button>
        </form>
        `;
    }   
};

export default productedit;

