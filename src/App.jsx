import { useState } from 'react'
import ContactList from './ContactList'
import ContactRow from './ContactRow';
import './App.css'



function App() {
const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>) : (
     <ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
  );
}

export default App
/*
import "./App.css";
import { useState } from "react";
import ContactList from "./ContactList";
import SelectedContact from "./SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}*/