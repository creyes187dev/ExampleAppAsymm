import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, ViewStyle} from 'react-native';

export interface ContainerProps {
  children: ReactNode;
  containerStyle?: ViewStyle;
}
export const Container = ({children, containerStyle}: ContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});
