import { ContactInfoType } from "./types.js";

export const creatListItem = (contactInfo : ContactInfoType): HTMLLIElement => {
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-1 bg-slate-100 rounded-lg" ;

    const contactNameElement = document.createElement("h2");
    contactNameElement.innerText = contactInfo.contactName;
    contactNameElement.className = "text-slate-700" ;

    const contactNumberElement = document.createElement("p");
    contactNumberElement.innerText = contactInfo.phoneNumber.toString() ;
    contactNumberElement.className = "text-slate-500" ;

    listItem.appendChild(contactNameElement)
    listItem.appendChild(contactNumberElement)

    // contactsListElement?.appendChild(listItem)
    return listItem; 
}

export const validateFields = (...fields : string[]): boolean => {
    return fields.every((field) => !!field.toString());
} 