import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../types';
import { Spacing } from './Spacing';

const GenericStyles = StyleSheet.create({
  borderRadiusApp: {},
  flex1: { flex: 1 },
  alignItemsCenter: { alignItems: 'center' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1ItemCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  marginTop2: {
    marginTop: Spacing.y2,
  },
  marginTop4: {
    marginTop: Spacing.y4,
  },
  marginTop6: {
    marginTop: Spacing.y6,
  },
  marginTop8: {
    marginTop: Spacing.y8,
  },
  marginTop10: {
    marginTop: Spacing.y10,
  },
  marginTop12: {
    marginTop: Spacing.y12,
  },
  marginTop14: {
    marginTop: Spacing.y14,
  },
  marginTop16: {
    marginTop: Spacing.y16,
  },
});

const ShadowStyles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    boxShadow: {
      shadowColor: colors.default.shadowColor,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.8,
      shadowRadius: 6,
      elevation: 5,
    },
    buttonShadow: {
      shadowColor: colors.default.shadowColor,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  });
};

const TextStyles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
});

export { GenericStyles, TextStyles, ShadowStyles };
