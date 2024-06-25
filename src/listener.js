import { checkoutHandler, closeSideBarBtnHandler, manageInventoryBtnHandler } from "./handlers"
import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
// import { createRecordFormHandler } from "./record";
import { addNewProductBtn, checkout, closeSideBarBtn, createRecordForm, manageInventoryBtn, recordGroup } from "./selectors"

export const listener = () => {
    manageInventoryBtn.addEventListener("click",manageInventoryBtnHandler);
    closeSideBarBtn.addEventListener("click",closeSideBarBtnHandler);
    addNewProductBtn.addEventListener("click",addNewProductBtnHandler);
    // createRecordForm.addEventListener("submit",createRecordFormHandler);
    createRecordForm.addEventListener("submit",createRecordFormHandler);
    recordGroup.addEventListener("click",recordGroupHandler);
    checkout.addEventListener("click",checkoutHandler);
}