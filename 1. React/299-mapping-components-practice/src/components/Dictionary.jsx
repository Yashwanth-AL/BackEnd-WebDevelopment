import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia";

function Dictionary(){
    return (
        <dl className="dictionary">
        {
          emojipedia.map((entry) => (
            <Entry 
              key={entry.id} 
              emoji={entry.emoji} 
              name={entry.name} 
              meaning={entry.meaning} 
              />
          ))
        } 
        </dl>
    );
}

export default Dictionary;