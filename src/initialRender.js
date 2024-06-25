import { productRender } from "./inventory";
import { productSideBar } from "./selectors"
import { products } from "./states";

export const initialRender = () => {
    // open product sidebar
    // productSideBar.classList.remove("translate-x-full");
    productRender(products);
}