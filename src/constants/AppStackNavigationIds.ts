import { AppConstants } from './AppConstants';

export const AppStackNavigationIds = {
  home: `${AppConstants.appNamePrefix}Home`,
  manageBCard: `${AppConstants.appNamePrefix}ManageBCard`,
  addBCard: `${AppConstants.appNamePrefix}AddBCard`,
} as const;
