import data from "../data";

const DetailPage = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */`
            <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p>${result.desc}</p>
                <a class="bg-blue-800 px-5 text-white" href="/admin/product/add">thêm</a>
            </div>
        `;
    },
};
export default DetailPage;