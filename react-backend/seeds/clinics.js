exports.seed = function(knex, Promise) {
  return knex("clinics").del()
    .then(function () {
      return knex("clinics").returning("*").insert([
        {
          name: "Loyal Medical Clinic",
          phone: 6044288313,
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
        },
        {
          name: "Ultima Medicentre",
          phone: 6046838138,
          hours: {
            Monday: "Closed",
            Tuesday: "8:00am - 4:00pm",
            Wednesday: "8:00am - 4:00pm",
            Thursday: "8:00am - 4:00pm",
            Friday: "8:00am - 4:00pm",
            Saturday: "Closed",
            Sunday: "Closed"
          },
          avg_wait_time: 1800,
          location: {
            address1:"1055 W Georgia St, Unit 112",
            address2: "",
            address3: "",
            city: "Vancouver",
            state: "BC",
            Zipcode: "V6E 3P3",
            country: "Canada",

          },
          coordinates: {
            lat: "49.285391",
            long: "-123.121550"
          },
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
