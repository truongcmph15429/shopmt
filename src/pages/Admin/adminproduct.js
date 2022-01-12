import adminproductlist from "../../components/Admin/product";

const productnew = {
    print(){
        return `<div>
        <h1>Quản lý product</h1>
        ${adminproductlist.print()}
    </div>`;
    }
};
   

export default productnew;

