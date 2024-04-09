import {UnistylesRegistry} from 'react-native-unistyles';
import {darkTheme, lightTheme} from './theme';

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
    initialTheme: 'light'
});
