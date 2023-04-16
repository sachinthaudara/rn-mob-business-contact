import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { FontWeight, Subtitle, SmallText, Text } from '../../../../typography';
import { GenericStyles } from '../../../../styles';
import { useTheme } from '../../../../theme';
import { ContactDetails } from '../../../../enums';
import { IBusinessCard } from '../../../../types';
import Styles from './BusinessCardView.styles';
import { ContactItemView } from '../contact-item-view';
import { NameAvatarView } from '../name-avatar-view';

interface BusinessCardViewProps {
  onPressBCard: (item: IBusinessCard) => void;
  item: IBusinessCard;
}

export const BusinessCardView = ({
  onPressBCard,
  item,
}: BusinessCardViewProps): JSX.Element => {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  return (
    <TouchableOpacity
      onPress={() => onPressBCard(item)}
      style={[
        styles.itemContainer,
        {
          borderColor: item.cardColor,
        },
      ]}>
      <View>
        <View style={GenericStyles.rowFlexStart}>
          <NameAvatarView
            titleText={item.personName}
            tintColor={item.cardTintColor}
          />
          <View style={styles.titleContainer}>
            <Subtitle
              numberOfLines={2}
              ellipsizeMode="tail"
              weight={FontWeight.Bold}>
              {item.personName}
            </Subtitle>
            <SmallText numberOfLines={1} ellipsizeMode="tail">
              {item.occupation}
            </SmallText>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              weight={FontWeight.Bold}>
              {item.company}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.contactContainer,
            { borderColor: item.cardTintColor },
          ]}>
          <ContactItemView item={item} detailType={ContactDetails.Phone} />
          <View style={styles.emailContainer}>
            <ContactItemView item={item} detailType={ContactDetails.Email} />
          </View>
          <ContactItemView item={item} detailType={ContactDetails.Linkedin} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
