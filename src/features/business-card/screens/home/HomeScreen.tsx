import React, { useContext } from 'react';

import { AppStackNavigationIds, AppTestIDs } from '../../../../constants';
import { BusinessCardView, EmptyCardsView } from '../../components';
import { BaseView } from '../../../../components';
import { FlatList } from 'react-native-gesture-handler';
import Styles from './HomeScreen.styles';
import { ListRenderItem, TouchableOpacity, View } from 'react-native';
import { IBusinessCard } from '../../../../types';
import {
  selectedBusinessCardState,
  businessCardListState,
} from '../../../../recoil';
import { GenericStyles } from '../../../../styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationProp } from '@react-navigation/core';
import { useTheme } from '../../../../theme';
import { Text } from '../../../../typography';

type HomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  const businessCards = useRecoilValue(businessCardListState);
  const setSelectedBusinessItem = useSetRecoilState<IBusinessCard | null>(
    selectedBusinessCardState,
  );
  let renderView = null;

  const onPressAddBCard = () => {
    navigation.navigate(AppStackNavigationIds.addBCard);
  };

  const onPressBCard = (card: IBusinessCard) => {
    setSelectedBusinessItem(card);
    navigation.navigate(AppStackNavigationIds.manageBCard);
  };

  const renderBusinessCardView: ListRenderItem<IBusinessCard> = ({
    item,
  }): JSX.Element => {
    return <BusinessCardView item={item} onPressBCard={onPressBCard} />;
  };

  if (businessCards.length > 0) {
    renderView = (
      <View style={GenericStyles.flex1}>
        <FlatList
          style={GenericStyles.flex1}
          contentContainerStyle={styles.listViewContentContainer}
          keyExtractor={card => card.id.toString()}
          data={businessCards}
          renderItem={renderBusinessCardView}
        />
      </View>
    );
  } else {
    renderView = <EmptyCardsView onPressAddFirstBCard={onPressAddBCard} />;
  }

  return (
    <BaseView showHeader={false} testID={AppTestIDs.home.homeScreen}>
      {renderView}
      <TouchableOpacity
        onPress={onPressAddBCard}
        style={styles.addFABContainer}>
        <Text style={styles.addFABText}>+</Text>
      </TouchableOpacity>
    </BaseView>
  );
};

export default HomeScreen;
