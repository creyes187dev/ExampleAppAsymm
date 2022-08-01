import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Container} from 'components/Container';
import {useAppDispatch, useAppSelector} from 'config/hooks';
import {fetchRecipes} from 'store/general/generalActions';
import {RecipeCard} from 'screens/Screen1/components';
import {Result} from 'store/general/interfaces';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'navigation/Routes';

export const Screen1 = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const {recipe, isFetching} = useAppSelector(state => state.general);
  const navigation = useNavigation();

  useEffect(() => {
    if (query.length >= 3) {
      dispatch(fetchRecipes({query}));
    }
  }, [query]);

  const resultsData = (result: Result) => {
    const onPress = () => navigation.navigate(Routes.Screen2, {id: result.id});

    return (
      <RecipeCard onPress={onPress} title={result.title} image={result.image} />
    );
  };
  return (
    <Container>
      <TextInput
        placeholder={'type something'}
        style={syles.input}
        value={query}
        onChangeText={value => setQuery(value)}
      />
      {isFetching ? (
        <ActivityIndicator color={'blue'} size={'large'} />
      ) : (
        <View>{recipe?.results.map(resultsData)}</View>
      )}
    </Container>
  );
};
const syles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
