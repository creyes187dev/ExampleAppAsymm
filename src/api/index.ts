export const URL_ENDPOINT = (query: string) =>
  `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=f25c41b6441745159634c8d95ad643ba`;

export const URL_RECIPE_INFORMATION = (id: number) =>
  `https://api.spoonacular.com/recipes/${id}/information?apiKey=f25c41b6441745159634c8d95ad643ba`;
