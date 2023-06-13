import {Slot} from 'expo-router';
import {DarkTheme, DefaultTheme, ThemeProvider,} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

export default function Root() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot/>
    </ThemeProvider>
  );
}
