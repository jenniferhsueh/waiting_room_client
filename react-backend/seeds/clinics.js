exports.seed = function(knex, Promise) {
  return knex("clinics").del()
    .then(function () {
      return knex("clinics").returning("*").insert([
        {
          name: "Loyal Medical Clinic",
          phone: 6044288313,
          website: "https://www.yelp.ca/biz/loyal-medical-clinic-vancouver",
          hours: {
            Monday: "9:00am - 6:00pm",
            Tuesday: "9:00am - 6:00pm",
            Wednesday: "9:00am - 6:00pm",
            Thursday: "9:00am - 6:00pm",
            Friday: "9:00am - 6:00pm",
            Saturday: "Closed",
            Sunday: "Closed"
          },
          avg_wait_time: 900,
          location: {
            address1:"1055 Dunsmuir St",
            address2: "",
            address3: "",
            city: "Vancouver",
            state: "BC",
            Zipcode: "V7X 1L3",
            country: "Canada",
          },
          coordinates: {
            latitude: "49.286494",
            longitude: "-123.121436"
          },
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
