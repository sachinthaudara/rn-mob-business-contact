import React, { useContext } from 'react';
import { View } from 'react-native';

import { Text, Title, Caption } from '../../../../typography';
import { FontSize, hScale } from '../../../../styles';
import { useTheme } from '../../../../theme';
import { ContactDetails, ContactDetailsViewType } from '../../../../enums';
import { IBusinessCard } from '../../../../types';
import Styles from './BusinessCardDetailsView.styles';
import { ContactItemView } from '../contact-item-view';
import { NameAvatarView } from '../name-avatar-view';
import { NullView } from '../../../../components';

interface BusinessCardDetailsViewProps {
  businessCard: IBusinessCard | null;
}

export const BusinessCardDetailsView = ({
  businessCard,
}: BusinessCardDetailsViewProps): JSX.Element => {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

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
