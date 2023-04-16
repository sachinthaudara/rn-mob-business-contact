import React, { useContext } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { BaseView, NullView } from '../../../../components';
import { useTheme } from '../../../../theme';
import Styles from './ManageBCardScreen.styles';
import {
  deleteBusinessCardAction,
  selectedBusinessCardState,
} from '../../../../recoil';
import { NameAvatarView } from '../../components/name-avatar-view';
import { IBusinessCard } from '../../../../types';
import { FontSize, hScale } from '../../../../styles';
import { Caption, Text, Title } from '../../../../typography';
import { ContactItemView } from '../../components';
import { ContactDetails, ContactDetailsViewType } from '../../../../enums';
import { AppTestIDs, AppTextPhrases } from '../../../../constants';

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

  const bCardDetailsView = (): JSX.Element => {
    if (businessCard) {
      return (
        <View style={styles.container}>
          <NameAvatarView
            size={hScale(100)}
            fontSize={FontSize.f48}
            titleText={businessCard.personName}
            tintColor={businessCard.cardTintColor}
          />
          <View style={styles.personalDetailView}>
            <Title
              style={styles.personalDetailText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {businessCard.personName}
            </Title>
            <Text
              style={styles.occupationText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {businessCard.occupation}
            </Text>
            <Caption
              style={styles.personalDetailText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {businessCard.company}
            </Caption>
          </View>

          <View style={styles.contactContainer}>
            <ContactItemView
              viewType={ContactDetailsViewType.ManageScreen}
              item={businessCard}
              detailType={ContactDetails.Phone}
            />
            <View style={styles.emailContainer}>
              <ContactItemView
                viewType={ContactDetailsViewType.ManageScreen}
                item={businessCard}
                detailType={ContactDetails.Email}
              />
            </View>
            <ContactItemView
              viewType={ContactDetailsViewType.ManageScreen}
              item={businessCard}
              detailType={ContactDetails.Linkedin}
            />
          </View>
        </View>
      );
    } else {
      return <NullView />;
    }
  };

  const onPressDelete = () => {
    Alert.alert(
      t(AppTextPhrases.manageBCard.delete.title),
      t(AppTextPhrases.manageBCard.delete.description) || '',
      [
        {
          text: t(AppTextPhrases.buttons.ok) || '',
          onPress: () => {
            deleteBusinessCard(businessCard);
            goBackHandler();
          },
          style: 'cancel',
        },
        {
          text: t(AppTextPhrases.buttons.no) || '',
          onPress: () => {
            return;
          },
        },
      ],
    );
  };

  const onPressSavePhoneContact = () => {
    Alert.alert(
      t(AppTextPhrases.manageBCard.update.title),
      t(AppTextPhrases.manageBCard.update.description) || '',
      [
        {
          text: t(AppTextPhrases.buttons.ok) || '',
          onPress: () => {
            deleteBusinessCard(businessCard);
            goBackHandler();
          },
          style: 'cancel',
        },
        {
          text: t(AppTextPhrases.buttons.no) || '',
          onPress: () => {
            return;
          },
        },
      ],
    );
  };

  return (
    <BaseView
      testID={AppTestIDs.manageBCard.savePhoneContact}
      screenTitle={t(AppTextPhrases.manageBCard.navHeader)}
      goBackHandler={goBackHandler}>
      {bCardDetailsView()}
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
