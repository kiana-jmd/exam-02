export type ContactProps = {
    id : string;
    contactName : string ;
    contactNumber : string | number;
    storage: "SIM" | "Device";
    avatar : string | null;
}

export type ContactListType = ContactProps[];