import { useState, useEffect } from 'react'


// create state values for single contact and setContact

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [contacts, setContacts] = useState(null);
    useEffect(()=>{
        async function fetchContacts() {
          try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selctedContactId}`);
            const result = await response.json();
            setContacts(result);
            console.log(result);
          }catch(error){
            console.error(error);
          }
        };
        fetchContacts();
      }, []);
}
//define function that uses fetch API and passes its URL with selectedContactId using template literals
