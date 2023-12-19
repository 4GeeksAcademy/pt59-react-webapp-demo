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
        console.log(contact);
      },

      readContacts: async () => {
        // We'll get our contacts here.
      },

      updateContact: async (id, updatedData) => {
        // We'll get our contacts here.
      },

      deleteContact: async (id) => {
        console.log(`Delete contact #${id}`);
      },
    },
  };
};

export default getState;
