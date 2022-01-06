import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu";
import Card from "./Card";
import Listbox from "./Listbox";
import { useState,useEffect } from "react";
import axios from "axios";

const baseUrl = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20";

function App() {
  
  const [people,setPeople]=useState([]);

  const [id,setId]=useState({name:{
    title:"Mr",first:"Berkan",last:"Steegh"
    },
    location:{street: {number: 753,name: "Barbariniplein"},city: "Hantumhuizen",state: "Groningen",country: "Netherlands",
    postcode: 67602,timezone: {offset: "+5:30",description: "Bombay, Calcutta, Madras, New Delhi"}},
    gender: "male",
    picture:{thumbnail:"https://randomuser.me/api/portraits/thumb/men/76.jpg"}
  });

  useEffect(()=>{
    axios.get(baseUrl).then((response)=>{
    setPeople(response.data.results);
    setId(()=>response.data.results[0]);
    })
    
  },[]);

  const bigcardinfo = (key)=>{
    setId(()=>{
      return people.find((user)=>user.email==key);
    })
  }
  return (
    <div className="bg-light">
      <div className="container">
        <Menu />
        <Card name={id.name}
              location={id.location}
              gender={id.gender}
              thumbnailurl={id.picture.thumbnail}
        />
        <Listbox people={people} 
                 setbigcard={bigcardinfo}
        />
      </div>
    </div>
  );
}

export default App;
