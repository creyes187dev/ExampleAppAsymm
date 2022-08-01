import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Container} from 'components/Container';
import WebView from 'react-native-webview';
import {useAppDispatch, useAppSelector} from 'config/hooks';
import {fetchGeneralInformation} from 'store/general/generalActions';
import {useRoute} from '@react-navigation/native';

export const Screen2 = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const id = route.params?.id;
  const {loading, result} = useAppSelector(
    state => state.general.generalRecipe,
  );

  useEffect(() => {
    dispatch(fetchGeneralInformation({id}));
  }, [id, dispatch]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={'blue'} size={'large'} />
      ) : (
        <>
          <Text>{result}</Text>
          <WebView
            style={styles.webView}
            originWhitelist={['*']}
            source={{uri: result}}
          />
        </>
      )}
    </Container>
  );
};
const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});
