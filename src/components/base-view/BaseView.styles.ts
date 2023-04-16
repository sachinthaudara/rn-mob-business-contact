import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../../types/IMobileTheme';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    flex1: { flex: 1 },
    container: { flex: 1, backgroundColor: colors.background.primaryColor },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    backButtonContainer: {
      padding: 10,
      width: 50,
      height: 50,
      justifyContent: 'center',
    },
    headerText: {
      marginHorizontal: 6,
    },
  });
};

export default Styles;
