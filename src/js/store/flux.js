const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda_slug: "pt59-demo-agenda",
      contacts: [
        {
          address: "404 Nonesuch Pl. Irving, TX 75061",
          agenda_slug: "pt59-demo-agenda",
          email: "sombra@catemail.com",
          full_name: "Sombra The Cat",
          id: 58647261029,
          phone: "16035555555",
        },
      ],
    },
    actions: {
      createContact: async (contact) => {
        console.log(
          "Your app should make a POST request with your contact data."
        );
      },

      readContacts: async () => {
        console.log(
          "Your app should make a fetch req. to GET all contacts for your slug."
        );
      },

      updateContact: async (id, updatedData) => {
        console.log(
          `Your app should make a PUT request to update contact_id ${id}`
        );
      },

      deleteContact: async (id) => {
        console.log(
          `Your app should make a DELETE request for contact_id ${id}`
        );
      },
    },
  };
};

export default getState;
