import React, { useState, useEffect } from "react";
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // setContacts(a => [...a, contact])
    setContacts([...contacts,{ id: uuid(), ...contact}]);
    // console.log("here"    );
    // console.log([...contacts, {id: uuid(), ...contact}]);
    console.log(contact);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact => contact.id !== id );
    setContacts(newContactList);
  };
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }
}, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContactHandler = {removeContactHandler} />
    </div>
  );
}

export default App;
