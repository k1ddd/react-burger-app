import { useEffect, useState } from 'react';
import axios from 'axios';
import mail from "../../assets/mail.png"
import clock from "../../assets/clock.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import phone from "../../assets/iphone.png"


export default function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://burger-api-xcwp.onrender.com/contact').then((r) =>
      setData(r.data)
    );
  }, []);

  return (
    <ul>
      {data.map((e) => (
        <li key={e._id}>
          <div><h3> <img src={phone} className="ingredients" alt="Logo" />{e.phone}</h3>
          <div> <img src={clock} className="ingredients" alt="Logo" />{ e.worktime}</div>
          <div> <img src={mail} className="ingredients" alt="Logo" /> {e.email}</div> 
          <div> <img src={facebook} className="ingredients" alt="Logo" /> {e.fb}</div>
            <div> <img src={instagram} className="ingredients" alt="Logo" />{e.inst}</div>
          </div>
          
        </li>
      ))}
    </ul>
  );
}
