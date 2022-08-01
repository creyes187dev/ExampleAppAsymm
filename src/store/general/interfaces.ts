export interface GeneralState {
  isFetching: boolean;
  error: string;
  recipe: Recipe | null;
  generalRecipe: {loading: boolean; result: string; error: string};
}

export interface Recipe {
  offset: number;
  number: number;
  results: Result[];
}
export interface Result {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface fetchRecipesParams {
  query: string;
}

export interface fetchGeneralInfoParams {
  id: number;
}

export interface GeneralRecipe {
  sourceUrl: string;
}
