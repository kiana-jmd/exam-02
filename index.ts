import { ContactListType , ContactProps } from "./src/types";

import { 
    submitButton , 
    showContactButton , 
    closeDrawerButton
} from "./src/importer.js";

import { handelCreatContac , showContactsButtonHandler , closeContactDrawerHandler} from "./src/event.js";
submitButton?.addEventListener("click" , handelCreatContac);

showContactButton?.addEventListener("click", showContactsButtonHandler)

closeDrawerButton?.addEventListener("click", closeContactDrawerHandler)
