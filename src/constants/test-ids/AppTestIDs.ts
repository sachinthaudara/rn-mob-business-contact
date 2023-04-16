import { AppConstants } from '../AppConstants';

export const AppTestIDs = {
  buttonBack: `${AppConstants.appNamePrefix}ButtonBack`,
  home: {
    homeScreen: `${AppConstants.appNamePrefix}HomeScreen`,
    addFistBCard: `${AppConstants.appNamePrefix}AddFirstBCard`,
  },
  addBCard: {
    addBCardScreen: `${AppConstants.appNamePrefix}AddBCard`,
    saveButton: `${AppConstants.appNamePrefix}AddBCard-SaveButton`,
  },
  manageBCard: {
    manageBCardScreen: `${AppConstants.appNamePrefix}ManageBCard`,
    deleteButton: `${AppConstants.appNamePrefix}ManageBCard-DeleteButton`,
    savePhoneContact: `${AppConstants.appNamePrefix}ManageBCard-SavePhoneContactButton`,
  },
};
