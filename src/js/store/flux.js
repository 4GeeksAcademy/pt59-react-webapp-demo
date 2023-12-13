const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      searchResults: [],
      selectedRecipe: {},
    },
    actions: {
      searchSpoonacular: async (search) => {
        const url = "https://api.spoonacular.com/recipes/complexSearch";
        const apiKey = process.env.API_KEY;

        const response = await fetch(`${url}?apiKey=${apiKey}&query=${search}`);
        const data = await response.json();

        setStore({
          searchResults: data.results,
        });
      },
    },
  };
};

export default getState;
