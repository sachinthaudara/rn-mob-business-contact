import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, LightTheme } from './color-palette';
import { IMobileTheme } from '../types';
import { kAppTheme } from '../constants';
import { MobileThemeType } from '../enums';

const ThemeContext = createContext({
  theme: LightTheme,
  changeTheme: (_theme: IMobileTheme) => {},
});

const ThemeProvider: React.FC<{
  children: ReactNode;
  defaultTheme?: IMobileTheme;
}> = ({ children, defaultTheme = LightTheme }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // @note: this is less complex function and no need to memoization
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeTheme = (newTheme: IMobileTheme): void => {
    setTheme(newTheme);
    AsyncStorage.setItem(kAppTheme, String(newTheme.type));
  };

  const getCachedTheme = useCallback(async () => {
    try {
      const cachedThemeType = await AsyncStorage.getItem(kAppTheme);

      if (cachedThemeType) {
        const themeType = Number(cachedThemeType) as MobileThemeType;

        changeTheme(
          themeType === MobileThemeType.Dark ? DarkTheme : LightTheme,
        );
      }
    } catch (error) {
      console.log('Init theme ERR ::: ', error);
    }
  }, [changeTheme]);

  useEffect(() => {
    getCachedTheme();
  }, [getCachedTheme]);

  // memorized the theme provider value, other wise this is re-render each time
  const themeProviderValue = useMemo(
    () => ({ theme, changeTheme }),
    [changeTheme, theme],
  );

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = ThemeContext;

export { useTheme, ThemeProvider };
