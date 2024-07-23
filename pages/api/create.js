// pages/api/create.js
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

let data = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, value } = req.body;
    const user = { id: uuidv4(), name, value };
    data.push(user);
    res.status(201).json(user);
  } 
  // else {
  //   res.status(405).json({ message: 'Method not allowed' });
  // }
}
