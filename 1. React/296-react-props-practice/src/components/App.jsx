import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Heading title="MyContact" />
      {
        contacts.map((contact) => (
          <Card 
            name = {contact.name}
            email = {contact.email}
            phone = {contact.phone}
            imgURL = {contact.imgURL}
          />
        ))
      }
    </div>
  );
}

export default App;
