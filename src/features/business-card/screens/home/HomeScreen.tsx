import React from 'react';
import { NavigationProp } from '@react-navigation/core';

import { AppStackNavigationIds, AppTestIDs } from '../../../../constants';
import { BusinessCardView, EmptyCardsView } from '../../components';
import { BaseView, FabButton } from '../../../../components';
import { FlatList } from 'react-native-gesture-handler';
import styles from './HomeScreen.styles';
import { ListRenderItem, View } from 'react-native';
import { IBusinessCard } from '../../../../types';
import {
  selectedBusinessCardState,
  businessCardListState,
} from '../../../../recoil';
import { GenericStyles } from '../../../../styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type HomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
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
      <FabButton
        icon="+"
        style={styles.fabAddButton}
        onPress={onPressAddBCard}
      />
    </BaseView>
  );
};

export default HomeScreen;
