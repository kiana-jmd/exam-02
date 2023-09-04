import { contactsListDrawer } from "./importer.js";


export const showContactsButtonHandler = () => {
    contactsListDrawer?.classList.remove("bottom-[-100%]");
    contactsListDrawer?.classList.add("bottom-[0%]");
}
export const closeContactDrawerHandler = () => {
    contactsListDrawer?.classList.add("bottom-[-100%]");
    contactsListDrawer?.classList.remove("bottom-[0%]");
}

import { 
    contactNameInput , 
    contactNumberInput ,
    deviceInput ,
    contactsListElement
 } from "./importer.js";
import { ContactProps } from "./types.js";
import { contactsList } from "./state.js";

export const handelCreatContac = () => {
    const newContact : ContactProps = {
        id: crypto.randomUUID(),
        contactName : contactNameInput?.value ?? '',
        contactNumber: contactNumberInput?.value ?? '',
        storage : deviceInput?.checked ? "Device" : "SIM",
        avatar : null,
    };
    contactsList.push(newContact);

    const listItem = document.createElement("li");
    listItem.className = "py-4 px-1 bg-slate-100 rounded-lg" ;
    const contactNameElement = document.createElement("h2");
    contactNameElement.innerText = newContact.contactName;
    contactNameElement.className = "text-slate-700" ;
    const contactNumberElement = document.createElement("p");
    contactNumberElement.innerText = newContact.contactNumber.toString() ;
    contactNumberElement.className = "text-slate-500" ;

    listItem.appendChild(contactNameElement)
    listItem.appendChild(contactNumberElement)

    contactsListElement?.appendChild(listItem)

}
