import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg"/>
      {contacts.map(contact => (
        <Card
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
