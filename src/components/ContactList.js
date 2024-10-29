import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    return (
        <div className="ui celled list">
            Contact list
            {props.contacts.map((contact) => {
                return (
                    <ContactCard contact ={contact} />
                )
            })}
        </div>
    )
}

export default ContactList;