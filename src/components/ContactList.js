import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }; 
    return (
        <div className="ui celled list">
            Contact list
            {props.contacts.map((contact) => {
                return (
                    <ContactCard key = {contact.id} removeContactHandler = {props.removeContactHandler} contact ={contact} />
                )
            })}
        </div>
    )
}

export default ContactList;