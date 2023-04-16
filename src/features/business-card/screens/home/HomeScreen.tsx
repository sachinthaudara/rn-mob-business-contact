import React from 'react';
import { AppTestIDs } from '../../../../constants';
import { EmptyCardsView } from '../../components';
import { BaseView } from '../../../../components';

const HomeScreen = (): JSX.Element => {
  const onPressAddFirstBCard = () => {
    // TODO -> Navigate to add card screen
  };

  return (
    <BaseView testID={AppTestIDs.home.homeScreen}>
      <EmptyCardsView onPressAddFirstBCard={onPressAddFirstBCard} />
    </BaseView>
  );
};

export default HomeScreen;
