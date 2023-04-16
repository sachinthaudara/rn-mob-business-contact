import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../../../../types';
import { Spacing, hScale } from '../../../../styles';

const nameAvatarSize = hScale(68);

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    itemContainer: {
      padding: Spacing.x16,
      marginBottom: 16,
      borderRadius: 2,
      borderLeftWidth: 10,
      borderTopWidth: 10,
      borderRightWidth: 4,
      borderBottomWidth: 4,
      shadowColor: colors.default.shadowColor,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 10,
      shadowRadius: 10,
      elevation: 5,
    },
    nameAvatar: {
      height: nameAvatarSize,
      width: nameAvatarSize,
      backgroundColor: colors.background.tertiaryColor,
      borderRadius: nameAvatarSize / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      flex: 1,
      marginLeft: Spacing.x24,
    },
    contactContainer: {
      borderLeftWidth: 2.5,
      paddingLeft: Spacing.x8,
      marginTop: Spacing.y16,
    },
    emailContainer: {
      marginVertical: Spacing.y8,
    },
  });
};

export default Styles;
