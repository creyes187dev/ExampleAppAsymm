import {GeneralState} from 'store/general/interfaces';
import {createSlice} from '@reduxjs/toolkit';
import {
  fetchGeneralInformation,
  fetchRecipes,
} from 'store/general/generalActions';
import {
  fetchGeneralInformationReducer,
  fetchRecipesReducer,
} from 'store/general/generalReducers';
import {useAppDispatch} from 'config/hooks';

export const initialState: GeneralState = {
  recipe: null,
  isFetching: false,
  error: '',
  generalRecipe: {loading: false, error: '', result: ''},
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // general actions
    builder.addCase(fetchRecipes.pending, fetchRecipesReducer.pending);
    builder.addCase(fetchRecipes.fulfilled, fetchRecipesReducer.fulfilled);
    builder.addCase(fetchRecipes.rejected, fetchRecipesReducer.rejected);

    // general recipe
    builder.addCase(
      fetchGeneralInformation.pending,
      fetchGeneralInformationReducer.pending,
    );
    builder.addCase(
      fetchGeneralInformation.fulfilled,
      fetchGeneralInformationReducer.fulfilled,
    );
    builder.addCase(
      fetchGeneralInformation.rejected,
      fetchGeneralInformationReducer.rejected,
    );
  },
});

export const useGeneralActions = () => {
  const dispatch = useAppDispatch();
};

export default generalSlice.reducer;
