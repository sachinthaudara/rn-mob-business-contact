import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  FontWeight,
  Subtitle,
  Header,
  SmallText,
  Text,
} from '../../../../typography';
import { GenericStyles } from '../../../../styles';
import { useTheme } from '../../../../theme';
import { ContactDetails } from '../../../../enums';
import { IBusinessCard } from '../../../../types';
import Styles from './BusinessCardView.styles';
import { ContactItemView } from '../contact-item-view';

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

  const nameTitle = `${item.firstName[0]}${item.lastName[0]}`;
  const fullName = `${item.firstName} ${item.lastName}`;
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
          <View style={styles.nameAvatar}>
            <Header style={{ color: item.cardTintColor }}>{nameTitle}</Header>
          </View>
          <View style={styles.titleContainer}>
            <Subtitle
              numberOfLines={2}
              ellipsizeMode="tail"
              weight={FontWeight.Bold}>
              {fullName}
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
