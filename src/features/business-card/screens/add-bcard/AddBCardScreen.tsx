import React, { useCallback, useContext, useState } from 'react';
import { NavigationProp } from '@react-navigation/core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { BaseView } from '../../../../components';
import {
  isEmpty,
  isValidText,
  isValidEmail,
  isValidUrl,
  isValidMobileNumber,
} from '../../../../helper';
import { IBusinessCard, IInputField } from '../../../../types';
import { InputFieldType } from '../../../../enums';
import {
  AppTestIDs,
  AppTextPhrases,
  KeyboardTypes,
} from '../../../../constants';
import { useTheme } from '../../../../theme';
import { TextInputView } from '../../components';
import Styles from './AddBCardScreen.styles';
import { Text, Header, Caption, FontWeight } from '../../../../typography';
import {
  addBusinessCardAction,
  businessCardListState,
} from '../../../../recoil';
import { getRandomColor } from '../../../../utils';

interface AddBCardScreenProps {
  navigation: NavigationProp<any, any>;
}

const AddBCardScreen = ({ navigation }: AddBCardScreenProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);
  const businessCards = useRecoilValue(businessCardListState);
  const addBusinessCard = useRecoilCallback(addBusinessCardAction);

  //This is not effect to the app performance
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goBackHandler = () => {
    navigation.goBack();
  };

  // Local state of the input fields
  const [personName, onChangePersonName] = useState<IInputField>({
    type: InputFieldType.PersonName,
    value: '',
    error: false,
    errorText: AppTextPhrases.addBCard.personName.error,
    placeholder: AppTextPhrases.addBCard.personName.placeholder,
  });
  const [occupation, onChangeOccupation] = useState<IInputField>({
    type: InputFieldType.Occupation,
    value: '',
    error: false,
    errorText: AppTextPhrases.addBCard.occupation.error,
    placeholder: AppTextPhrases.addBCard.occupation.placeholder,
  });
  const [company, onChangeCompany] = useState<IInputField>({
    type: InputFieldType.Company,
    value: '',
    error: false,
    errorText: AppTextPhrases.addBCard.company.error,
    placeholder: AppTextPhrases.addBCard.company.placeholder,
  });
  const [email, onChangeEmail] = useState<IInputField>({
    type: InputFieldType.Email,
    keyboardType: KeyboardTypes.email,
    value: '',
    error: false,
    errorText: AppTextPhrases.addBCard.email.error,
    placeholder: AppTextPhrases.addBCard.email.placeholder,
  });
  const [mobileNumber, onChangeMobileNumber] = useState<IInputField>({
    type: InputFieldType.MobileNumber,
    keyboardType: KeyboardTypes.numberPad,
    value: '',
    error: false,
    errorText: AppTextPhrases.addBCard.mobileNumber.error,
    placeholder: AppTextPhrases.addBCard.mobileNumber.placeholder,
  });
  const [linkedInURL, onChangeLinkedInUrl] = useState<IInputField>({
    type: InputFieldType.LinkedInURL,
    value: '',
    error: false,
    errorText: AppTextPhrases.addBCard.linkedInURL.error,
    placeholder: AppTextPhrases.addBCard.linkedInURL.placeholder,
  });

  // Handle the onTextChange event
  const onChangeTextInput = (text: string, type: InputFieldType) => {
    switch (type) {
      case InputFieldType.PersonName:
        onChangePersonName({
          ...personName,
          value: text,
          error: false,
        });
        break;
      case InputFieldType.Occupation:
        onChangeOccupation({
          ...occupation,
          value: text,
          error: false,
        });
        break;
      case InputFieldType.Company:
        onChangeCompany({
          ...company,
          value: text,
          error: false,
        });
        break;
      case InputFieldType.Email:
        onChangeEmail({
          ...email,
          value: text,
          error: false,
        });
        break;
      case InputFieldType.MobileNumber:
        onChangeMobileNumber({
          ...mobileNumber,
          value: text,
          error: false,
        });
        break;
      case InputFieldType.LinkedInURL:
        onChangeLinkedInUrl({
          ...linkedInURL,
          value: text,
          error: false,
        });
    }
  };

  /**
   * Handle the onPressSave
   * Check the input field are valid
   * Store in in-memory cache
   * Store in the persistent storage
   */
  const onPressSave = useCallback(() => {
    let invalid = false;

    if (!isValidText(personName.value)) {
      onChangePersonName({ ...personName, error: true });
      invalid = true;
    }

    if (!isValidText(occupation.value)) {
      onChangeOccupation({ ...occupation, error: true });
      invalid = true;
    }

    if (!isValidText(company.value)) {
      onChangeCompany({ ...company, error: true });
      invalid = true;
    }

    if (!isValidMobileNumber(mobileNumber.value)) {
      onChangeMobileNumber({ ...mobileNumber, error: true });
      invalid = true;
    }

    /**
     * LinkedIn URL is optional,
     * so if there are value, then check the value is valid url
     */
    if (!isEmpty(linkedInURL.value)) {
      if (!isValidUrl(linkedInURL.value)) {
        onChangeLinkedInUrl({ ...linkedInURL, error: true });
        invalid = true;
      }
    }

    if (!isValidEmail(email.value)) {
      onChangeEmail({ ...email, error: true });
      invalid = true;
    }

    if (invalid) {
      return;
    }

    const payload: IBusinessCard = {
      id: businessCards.length,
      cardColor: getRandomColor(),
      cardTintColor: getRandomColor(),
      personName: personName.value,
      occupation: occupation.value,
      company: company.value,
      email: email.value,
      mobileNumber: mobileNumber.value,
      linkedInUrl: linkedInURL.value,
    };

    addBusinessCard(payload);
    goBackHandler();
  }, [
    personName,
    occupation,
    company,
    mobileNumber,
    linkedInURL,
    email,
    businessCards,
    addBusinessCard,
    goBackHandler,
  ]);

  return (
    <BaseView
      testID={AppTestIDs.addBCard.addBCardScreen}
      screenTitle={t(AppTextPhrases.addBCard.navHeader)}
      goBackHandler={goBackHandler}>
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        enableResetScrollToCoords={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.bodyContainer}>
          <View style={styles.welcomeContainer}>
            <Header>{t(AppTextPhrases.addBCard.welcome)}</Header>
            <Text style={styles.descriptionText}>
              {t(AppTextPhrases.addBCard.description)}
            </Text>
          </View>
          <View>
            <TextInputView
              input={personName}
              onTextChange={onChangeTextInput}
            />
            <TextInputView
              input={occupation}
              onTextChange={onChangeTextInput}
            />
            <TextInputView input={company} onTextChange={onChangeTextInput} />
            <TextInputView input={email} onTextChange={onChangeTextInput} />
            <TextInputView
              input={mobileNumber}
              onTextChange={onChangeTextInput}
            />
            <TextInputView
              input={linkedInURL}
              onTextChange={onChangeTextInput}
            />
          </View>
          <View style={styles.saveBCardButtonContainer}>
            <TouchableOpacity
              testID={AppTestIDs.addBCard.saveButton}
              style={styles.saveBCardButton}
              onPress={onPressSave}>
              <Caption style={styles.saveBCardText} weight={FontWeight.Bold}>
                {t(AppTextPhrases.home.empty_bcard.button)}
              </Caption>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </BaseView>
  );
};

export default AddBCardScreen;
