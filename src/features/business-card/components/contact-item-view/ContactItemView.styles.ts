import { StyleSheet } from 'react-native';
import { Spacing } from '../../../../styles';

const Styles = StyleSheet.create({
  iconView: {
    height: 16,
    width: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.x8,
  },
  manageViewIcon: {
    padding: Spacing.x8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.x8,
  },
  contactText: {
    textAlign: 'center',
  },
});

export default Styles;
