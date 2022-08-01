import {GeneralRecipe, GeneralState, Recipe} from 'store/general/interfaces';
import {PayloadAction} from '@reduxjs/toolkit';

export const fetchRecipesReducer = {
  pending: (state: GeneralState) => {
    state.isFetching = true;
  },
  fulfilled: (state: GeneralState, action: PayloadAction<Recipe>) => {
    state.recipe = action?.payload || null;
    state.isFetching = false;
  },
  rejected: (state: GeneralState, action: any) => {
    state.error = action.payload?.message;
    state.isFetching = false;
  },
};

export const fetchGeneralInformationReducer = {
  pending: (state: GeneralState) => {
    state.generalRecipe.loading = true;
  },
  fulfilled: (state: GeneralState, action: PayloadAction<GeneralRecipe>) => {
    state.generalRecipe.result = action?.payload?.sourceUrl || '';
    state.generalRecipe.loading = false;
  },
  rejected: (state: GeneralState, action: any) => {
    state.generalRecipe.error = action.payload?.message;
    state.generalRecipe.loading = false;
  },
};
