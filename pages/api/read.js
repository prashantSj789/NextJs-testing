// pages/api/read.js
let data = ["rakesh singh","ritu singh"];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed!!' });
  }
}
