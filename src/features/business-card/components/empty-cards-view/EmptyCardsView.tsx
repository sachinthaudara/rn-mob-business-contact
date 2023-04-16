import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';
import { useTranslation } from 'react-i18next';

import { AppTestIDs, AppTextPhrases } from '../../../../constants';
import { Caption, FontWeight, Label } from '../../../../typography';
import { AppAnimations } from '../../../../assets';
import { GenericStyles } from '../../../../styles';
import Styles from './EmptyCardsView.styles';
import { useTheme } from '../../../../theme';

interface EmptyCardsViewProps {
  onPressAddFirstBCard: () => void;
}

export const EmptyCardsView = ({
  onPressAddFirstBCard,
}: EmptyCardsViewProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  return (
    <View style={[GenericStyles.flex1ItemCenter, styles.container]}>
      <Lottie
        style={styles.emptyAnimationContainer}
        source={AppAnimations.noBusinessCard}
        autoPlay
        loop
      />
      <View style={styles.emptyTextContainer}>
        <Caption>{t(AppTextPhrases.home.empty_bcard.title)}</Caption>
        <Label style={styles.emptyTextDescription}>
          {t(AppTextPhrases.home.empty_bcard.description)}
        </Label>
      </View>
      <TouchableOpacity
        testID={AppTestIDs.home.addFistBCard}
        style={styles.addFirstBCardButton}
        onPress={onPressAddFirstBCard}>
        <Caption style={styles.addFirstBCardText} weight={FontWeight.Bold}>
          {t(AppTextPhrases.home.empty_bcard.button)}
        </Caption>
      </TouchableOpacity>
    </View>
  );
};
