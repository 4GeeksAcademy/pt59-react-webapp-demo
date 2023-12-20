const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [
        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          films: [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/",
          ],
          species: ["https://swapi.dev/api/species/1/"],
          vehicles: [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/",
          ],
          starships: [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/",
          ],
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          url: "https://swapi.dev/api/people/1/",
        },
        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          films: [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/",
          ],
          species: ["https://swapi.dev/api/species/1/"],
          vehicles: [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/",
          ],
          starships: [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/",
          ],
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          url: "https://swapi.dev/api/people/1/",
        },
        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          films: [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/",
          ],
          species: ["https://swapi.dev/api/species/1/"],
          vehicles: [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/",
          ],
          starships: [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/",
          ],
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          url: "https://swapi.dev/api/people/1/",
        },
      ],
      vehicles: [
        {
          name: "Sand Crawler",
          model: "Digger Crawler",
          manufacturer: "Corellia Mining Corporation",
          cost_in_credits: "150000",
          length: "36.8 ",
          max_atmosphering_speed: "30",
          crew: "46",
          passengers: "30",
          cargo_capacity: "50000",
          consumables: "2 months",
          vehicle_class: "wheeled",
          pilots: [],
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/5/",
          ],
          created: "2014-12-10T15:36:25.724000Z",
          edited: "2014-12-20T21:30:21.661000Z",
          url: "https://swapi.dev/api/vehicles/4/",
        },
      ],
      starships: [
        {
          MGLT: "10 MGLT",
          cargo_capacity: "1000000000000",
          consumables: "3 years",
          cost_in_credits: "1000000000000",
          created: "2014-12-10T16:36:50.509000Z",
          crew: "342953",
          edited: "2014-12-10T16:36:50.509000Z",
          hyperdrive_rating: "4.0",
          length: "120000",
          manufacturer:
            "Imperial Department of Military Research, Sienar Fleet Systems",
          max_atmosphering_speed: "n/a",
          model: "DS-1 Orbital Battle Station",
          name: "Death Star",
          passengers: "843342",
          films: ["https://swapi.dev/api/films/1/"],
          pilots: [],
          starship_class: "Deep Space Mobile Battlestation",
          url: "https://swapi.dev/api/starships/9/",
        },
      ],
    },
    actions: {
      getSwapiData: async (resource = "people", id = null) => {
        // in here you can fetch the resource
        // and set your store with the resp data.
        console.log(resource);
      },
    },
  };
};

export default getState;
