import React, { useContext } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Caption, Label } from '../../../../typography';
import { GenericStyles } from '../../../../styles';
import styles from './ContactItemView.styles';
import { useTheme } from '../../../../theme';
import { ContactDetails, ContactDetailsViewType } from '../../../../enums';
import { IBusinessCard } from '../../../../types';
import { NullView } from '../../../../components';

interface ContactItemViewProps {
  viewType?: ContactDetailsViewType;
  detailType: ContactDetails;
  item: IBusinessCard;
}

export const ContactItemView = ({
  viewType = ContactDetailsViewType.HomeScreen,
  detailType,
  item,
}: ContactItemViewProps): JSX.Element => {
  const { theme } = useContext(useTheme);

  const iconName: string = detailType.valueOf();
  let title: string | undefined;

  if (detailType === ContactDetails.Email) {
    title = item.email;
  } else if (detailType === ContactDetails.Linkedin) {
    title = item.linkedInUrl;
    if (item.linkedInUrl === '') {
      return <NullView />;
    }
  } else {
    title = item.mobileNumber;
  }

  if (viewType === ContactDetailsViewType.HomeScreen) {
    return (
      <View style={GenericStyles.rowFlexStart}>
        <FeatherIcon
          style={[styles.iconView, { backgroundColor: item.cardTintColor }]}
          name={iconName}
          size={12}
          color={theme.text.primaryColor}
        />
        <Label>{title}</Label>
      </View>
    );
  } else {
    return (
      <View style={GenericStyles.center}>
        <FeatherIcon
          style={[
            styles.manageViewIcon,
            { backgroundColor: item.cardTintColor },
          ]}
          name={iconName}
          size={28}
          color={theme.text.primaryColor}
        />
        <Caption
          style={styles.contactText}
          numberOfLines={2}
          ellipsizeMode="tail">
          {title}
        </Caption>
      </View>
    );
  }
};
