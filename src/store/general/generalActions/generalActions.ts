import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  fetchGeneralInfoParams,
  fetchRecipesParams,
} from 'store/general/interfaces';
import axios from 'axios';
import {URL_ENDPOINT, URL_RECIPE_INFORMATION} from 'api/index';

export const fetchRecipes = createAsyncThunk(
  'general/fetchRecipes',
  async ({query}: fetchRecipesParams) => {
    const response = await axios.get(URL_ENDPOINT(query));
    return response.data;
  },
);

export const fetchGeneralInformation = createAsyncThunk(
  'general/fetchGeneralInformation',
  async ({id}: fetchGeneralInfoParams) => {
    const response = await axios.get(URL_RECIPE_INFORMATION(id));
    return response.data;
  },
);
