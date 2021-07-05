import Font from 'expo-font';
import { StyleSheet } from 'react-native';
import '../assets/fonts/SourceSansPro-Regular.ttf';

export const fetchFonts = (): Promise<void> =>
  Font.loadAsync({
    'source-sans-pro': 'SourceSansPro-Regular',
  });

export const styles = StyleSheet.create({});
