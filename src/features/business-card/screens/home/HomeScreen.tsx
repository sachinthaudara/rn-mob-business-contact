import React from 'react';

import { AppTestIDs } from '../../../../constants';
import { BusinessCardView, EmptyCardsView } from '../../components';
import { BaseView } from '../../../../components';
import { FlatList } from 'react-native-gesture-handler';
import styles from './HomeScreen.styles';
import { ListRenderItem, View } from 'react-native';
import { IBusinessCard } from '../../../../types';
import {
  selectedBusinessCardState,
  businessCardsState,
} from '../../../../recoil';
import { GenericStyles } from '../../../../styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const HomeScreen = (): JSX.Element => {
  const businessCards = useRecoilValue(businessCardsState);
  const setSelectedBusinessItem = useSetRecoilState<IBusinessCard | null>(
    selectedBusinessCardState,
  );
  let renderView = null;

  const onPressAddFirstBCard = () => {
    // TODO -> Navigate to add card screen
  };

  const onPressBCard = (card: IBusinessCard) => {
    setSelectedBusinessItem(card);
    // TODO -> navigate to the card view screen
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
    renderView = <EmptyCardsView onPressAddFirstBCard={onPressAddFirstBCard} />;
  }

  return (
    <BaseView showHeader={false} testID={AppTestIDs.home.homeScreen}>
      {renderView}
    </BaseView>
  );
};

export default HomeScreen;
