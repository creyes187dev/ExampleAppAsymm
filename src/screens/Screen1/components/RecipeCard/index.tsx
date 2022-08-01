import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface RecipeCardProps {
  title: string;
  image: string;
  onPress: () => void;
}
export const RecipeCard = ({title, image, onPress}: RecipeCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground style={styles.image} source={{uri: image}}>
        <Text>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  image: {
    height: 70,
    width: '100%',
  },
});
