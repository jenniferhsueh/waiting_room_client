exports.seed = function(knex, Promise) {
  return knex("users").del()
    .then(function () {
      return knex("users").returning("*").insert([
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
        }
      ]);
    });
};
