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
import { ContactInfoType, ContactProps } from "./types.js";
import { contactsList } from "./state.js";
import { creatListItem, validateFields } from "./function.js";

const validateCreateContact = (contactInfo: ContactInfoType) => {
    if(!validateFields(contactInfo.contactName , contactInfo.phoneNumber + ""))
     alert("fill all fields")
     throw Error("fill all fields")
}

export const handelCreatContac = () => {
    const newContact : ContactProps = {
        id: crypto.randomUUID(),
        contactName : contactNameInput?.value ?? '',
        contactNumber: contactNumberInput?.value ?? '',
        storage : deviceInput?.checked ? "Device" : "SIM",
        avatar : null,
    };

    validateCreateContact({
        contactName : contactNameInput!.value,
        phoneNumber : contactNumberInput!.value
    })

    contactsList.push(newContact);

 const listItem = creatListItem({
        contactName: newContact.contactName,
        phoneNumber: newContact.contactNumber,
    }) 
    contactsListElement?.appendChild(listItem);
 }
