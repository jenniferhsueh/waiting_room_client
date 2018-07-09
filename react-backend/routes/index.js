const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
	const users = [
		{
      first_name: "Jennifer", 
      last_name: "Hsueh", 
      phone: 6043151860, 
      email: "jenn@jenn.com", 
      password: "jenn",
      deposit: false,
      location: {
        address1:"128 W Hastings St",
        address2: "",
        address3: "",
        city: "Vancouver",
        state: "BC",
        Zipcode: "V6B 1G8",
        country: "Canada",
      },
      coordinates: {
        lat: "41.864128", 
        long: "-87.669449"
      },
      clinics_id: 1
    },
    {
      first_name: "Joel", 
      last_name: "Shinness", 
      phone: 6043151860, 
      email: "joel@jenn.com", 
      password: "joel",
      deposit: true,
      location: {
        address1:"534 W Pender St",
        address2: "",
        address3: "",
        city: "Vancouver",
        state: "BC",
        Zipcode: "V6B 1V3",
        country: "Canada",
      },
      coordinates: {
        lat: "49.283599", 
        long: "-123.113811"
      },
      clinics_id: 2
    }
	];
	res.json(customers);
});


const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`))