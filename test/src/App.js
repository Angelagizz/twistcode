import React from "react";
import Header from "./components/features/header/Header";
import NameDetail from "./components/features/nameDetail/NameDetail";
import Address from "./components/features/address/Address";
import Contacts from "./components/features/contacts/Contact";
import Note from "./components/features/note/Note";

function App() {
  return (  
    <div className="App">
      <Header></Header>
      <NameDetail></NameDetail>
      <Address></Address>
      <Contacts></Contacts>
      <Note></Note>
    </div>
  );
}

export default App;
