import { useEffect, useState } from 'react';
import axios from 'axios';
import "./orders.css"

export default function Orders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://burger-api-xcwp.onrender.com/orders').then((r) =>
      setData(r.data)
    );
  }, []);

  return (
    <ul>
      {data.map((e) => (
        <li key={e._id}>
          <div className='flex'>
          <h3> {e.orderName}</h3>
          <div>{'Address: ' + e.orderAddress}</div>
          <div>{'Phone: ' + e.orderPhone}</div>
          </div>
          
        </li>
      ))}
    </ul>
  );
}
