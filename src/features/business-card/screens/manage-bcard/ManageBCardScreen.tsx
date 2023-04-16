import React, { useContext } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Contacts, { Contact } from 'react-native-contacts';

import { BaseView } from '../../../../components';
import { useTheme } from '../../../../theme';
import Styles from './ManageBCardScreen.styles';
import {
  deleteBusinessCardAction,
  selectedBusinessCardState,
} from '../../../../recoil';
import { IBusinessCard } from '../../../../types';
import { AppTestIDs, AppTextPhrases } from '../../../../constants';
import { requestPhoneContactPermissions } from '../../../../utils';
import { BusinessCardDetailsView } from '../../components/business-card-details-view';

interface ManageBCardScreenProps {
  navigation: NavigationProp<any, any>;
}

const ManageBCardScreen = ({
  navigation,
}: ManageBCardScreenProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);
  const businessCard = useRecoilValue<IBusinessCard | null>(
    selectedBusinessCardState,
  );
  const deleteBusinessCard = useRecoilCallback(deleteBusinessCardAction);

  //This is not effect to the app performance
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goBackHandler = () => {
    navigation.goBack();
  };

  const onPressDelete = () => {
    Alert.alert(
      t(AppTextPhrases.manageBCard.delete.title),
      t(AppTextPhrases.manageBCard.delete.description) || '',
      [
        {
          text: t(AppTextPhrases.buttons.no) || '',
          onPress: () => {
            return;
          },
        },
        {
          style: 'destructive',
          text: t(AppTextPhrases.buttons.ok) || '',
          onPress: () => {
            deleteBusinessCard(businessCard);
            goBackHandler();
          },
        },
      ],
    );
  };

  const onPressSavePhoneContact = async () => {
    let existingContact: Contact | null = null;

    const canAccessPhoneContact = await requestPhoneContactPermissions();
    if (canAccessPhoneContact) {
      // Check there are existing contacts
      const phoneContacts = await Contacts.getAllWithoutPhotos();
      phoneContacts.forEach(contact => {
        contact.phoneNumbers.forEach(phoneNumber => {
          if (phoneNumber.number === businessCard?.mobileNumber) {
            existingContact = contact;
            console.log(contact);
          }
        });
      });

      if (existingContact) {
        // If there are any existing contact ask from app user to update it with existing contact
        Alert.alert(
          t(AppTextPhrases.manageBCard.updatePhoneContact.title),
          t(AppTextPhrases.manageBCard.updatePhoneContact.description) || '',
          [
            {
              text: t(AppTextPhrases.buttons.no) || '',
              onPress: () => {
                return;
              },
            },
            {
              text: t(AppTextPhrases.buttons.ok) || '',
              onPress: () => {
                savePhoneContacts(existingContact);
              },
            },
          ],
        );
      } else {
        // If there are no any existing contact ask from app user to add new contact
        Alert.alert(
          t(AppTextPhrases.manageBCard.savePhoneContact.title),
          t(AppTextPhrases.manageBCard.savePhoneContact.description) || '',
          [
            {
              text: t(AppTextPhrases.buttons.no) || '',
              onPress: () => {
                return;
              },
            },
            {
              text: t(AppTextPhrases.buttons.ok) || '',
              onPress: () => {
                savePhoneContacts(null);
              },
            },
          ],
        );
      }
    } else {
      // If permission not allow, shows the fail message
      Alert.alert(
        t(AppTextPhrases.permission.phoneContact.fail.title),
        t(AppTextPhrases.permission.phoneContact.fail.message) || '',
        [
          {
            text: t(AppTextPhrases.buttons.ok) || '',
            onPress: () => {
              return;
            },
          },
        ],
      );
    }
  };

  // If existing contact available, then update it, or else add new contact
  const savePhoneContacts = async (existingContact: Contact | null) => {
    try {
      if (businessCard) {
        const urlAddresses = businessCard.linkedInUrl
          ? [
              {
                label: 'other',
                url: businessCard.linkedInUrl,
              },
            ]
          : null;

        let newContact: Contact | any = {
          ...existingContact,
          emailAddresses: [
            {
              label: 'work',
              email: businessCard.email,
            },
          ],
          familyName: '',
          givenName: businessCard.personName,
          recordID: existingContact ? existingContact.recordID : '',
          backTitle: '',
          company: businessCard.company,
          displayName: '',
          middleName: '',
          jobTitle: businessCard.occupation,
          phoneNumbers: [
            {
              label: 'mobile',
              number: businessCard.mobileNumber,
            },
          ],
          hasThumbnail: false,
          thumbnailPath: '',
          isStarred: false,
          postalAddresses: [],
          prefix: '',
          suffix: '',
          department: '',
          birthday: { day: 0, month: 0, year: 0 },
          imAddresses: [],
          note: '',
          urlAddresses,
        };

        if (existingContact) {
          await Contacts.updateContact(newContact);
        } else {
          await Contacts.addContact(newContact);
        }
      }
    } catch (error) {
      // If there are any error occurs from Contacts plugin, shows generic error alert
      Alert.alert(
        t(AppTextPhrases.error.title),
        t(AppTextPhrases.error.description) || '',
        [
          {
            text: t(AppTextPhrases.buttons.ok) || '',
            onPress: () => {
              return;
            },
          },
        ],
      );
    }
  };

  return (
    <BaseView
      testID={AppTestIDs.manageBCard.savePhoneContact}
      screenTitle={t(AppTextPhrases.manageBCard.navHeader)}
      goBackHandler={goBackHandler}>
      <BusinessCardDetailsView businessCard={businessCard} />
      <View style={styles.fabContainer}>
        <TouchableOpacity
          onPress={onPressSavePhoneContact}
          style={[styles.fabButtonContainer, styles.saveButton]}>
          <FeatherIcon name="save" size={30} color={theme.button.textColor} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressDelete}
          style={[styles.fabButtonContainer, styles.deleteButton]}>
          <FeatherIcon
            name="trash-2"
            size={30}
            color={theme.button.textColor}
          />
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};

export default ManageBCardScreen;
