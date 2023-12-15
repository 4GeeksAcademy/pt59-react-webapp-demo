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

      getSingleRecipe: async (recipe_id) => {
        const url = `https://api.spoonacular.com/recipes/${recipe_id}/information`;
        const resp = await fetch(`${url}?apiKey=${process.env.API_KEY}`);
        const data = await resp.json();
        setStore({ selectedRecipe: data });
      },
    },
  };
};

export default getState;
