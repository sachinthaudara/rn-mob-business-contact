import React, { useContext } from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '../../theme/ThemeProvider';
import { RNViewStyleProps } from '../../types/RNViewStyleProps';
import Styles from './BaseView.style';
import { NavHeader } from '../../typography';

export interface BaseViewProps {
  testID: string;
  children: React.ReactNode;
  screenTitle?: string | null;
  goBackHandler?: () => void;
  style?: any;
  contentContainerStyle?: RNViewStyleProps;
  headerTintColor?: string;
  showHeader?: boolean;
}

/**
 * BaseView for the any screen, fully customization for the theme.
 * @param goBackHandler this callback only works if the *showHeader* true
 * @returns
 */
export function BaseView({
  testID,
  children,
  screenTitle,
  goBackHandler,
  style,
  contentContainerStyle,
  headerTintColor,
  showHeader = true,
}: BaseViewProps) {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  const goBack = () => {
    if (goBackHandler) {
      goBackHandler();
    }
  };

  const emptyHeaderSpacer = <View style={styles.backButtonContainer} />;

  const headerView = () => {
    if (showHeader) {
      return (
        <View style={styles.headerContainer}>
          {goBackHandler ? (
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={goBack}>
              <FeatherIcon
                name="chevron-left"
                size={30}
                color={headerTintColor || theme.text.primaryColor}
              />
            </TouchableOpacity>
          ) : (
            emptyHeaderSpacer
          )}
          {
            <NavHeader
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.headerText,
                {
                  color: headerTintColor || theme.text.primaryColor,
                },
              ]}>
              {screenTitle}
            </NavHeader>
          }
          {emptyHeaderSpacer}
        </View>
      );
    }

    return null;
  };

  return (
    <View testID={testID} style={[styles.container, style]}>
      <SafeAreaView />
      {headerView()}
      <View style={[styles.flex1, contentContainerStyle]}>{children}</View>
      <SafeAreaView />
    </View>
  );
}

export default BaseView;
