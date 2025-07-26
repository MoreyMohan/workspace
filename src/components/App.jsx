import React from "react";
import Card from "./Card";
import contact from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contact.map((contact) => {
        return (
          <Card
            ket={contact.id}
            name={contact.name}
            imageUrl={contact.imgURL}
            contact={contact.phone}
            mailId={contact.email}
          />
        );
      })}
      {/* <Card
        name={contact[0].name}
        imageUrl={contact[0].imgURL}
        contact={contact[0].phone}
        mailId={contact[0].email}
      />
      <Card
        name={contact[1].name}
        imageUrl={contact[1].imgURL}
        contact={contact[1].phone}
        mailId={contact[1].email}
      />
      <Card
        name={contact[2].name}
        imageUrl={contact[2].imgURL}
        contact={contact[2].phone}
        mailId={contact[2].email}
      /> */}
    </div>
  );
}

export default App;
