import React, { useContext } from 'react';
import Styles from './Styles';
import { useTheme } from '../theme/ThemeProvider';
import { FontWeight } from './FontWeight';
import { AppFontFamily } from './FontFamily';
import { FontClass } from './FontClass';

export const translateProps = (
  props: any,
  componentDisplayName: any,
  styles: any,
) => {
  const { align, weight, style } = props;
  const changeStyleOnFly = {
    textAlign: align || 'left',
    ...style,
  };

  const fontFamily = {
    fontFamily: getFontFamily(weight),
  };

  switch (componentDisplayName) {
    case FontClass.Header:
      return {
        ...props,
        style: [fontFamily, styles.header, changeStyleOnFly, props.style],
      };
    case FontClass.NavHeader:
      return {
        ...props,
        style: [fontFamily, styles.navHeader, changeStyleOnFly, props.style],
      };
    case FontClass.Title:
      return {
        ...props,
        style: [fontFamily, styles.title, changeStyleOnFly, props.style],
      };
    case FontClass.Subtitle:
      return {
        ...props,
        style: [fontFamily, styles.subtitle, changeStyleOnFly, props.style],
      };
    case FontClass.Caption:
      return {
        ...props,
        style: [fontFamily, styles.caption, changeStyleOnFly, props.style],
      };
    case FontClass.Text:
      return {
        ...props,
        style: [fontFamily, styles.text, changeStyleOnFly, props.style],
      };
    case FontClass.Label:
      return {
        ...props,
        style: [fontFamily, styles.label, changeStyleOnFly, props.style],
      };
    case FontClass.SmallText:
      return {
        ...props,
        style: [fontFamily, styles.smallText, changeStyleOnFly, props.style],
      };

    default:
      return props;
  }
};

export default (componentStyleName: any) => {
  return (WrappedComponent: any) => {
    return (args: any) => {
      const { theme } = useContext(useTheme);
      const styles = Styles(theme);

      if (args.inlineStyle) {
        return (
          <WrappedComponent
            {...translateProps(args, componentStyleName, styles)}>
            {getNestedText(componentStyleName, WrappedComponent, args)}
          </WrappedComponent>
        );
      }
      return (
        <WrappedComponent
          {...translateProps(args, componentStyleName, styles)}
        />
      );
    };
  };
};

export const getFontFamily = (weight: FontWeight) => {
  switch (weight) {
    case FontWeight.Light:
      return AppFontFamily.Light;
    case FontWeight.Medium:
      return AppFontFamily.Medium;
    case FontWeight.SemiBold:
      return AppFontFamily.SemiBold;
    case FontWeight.Bold:
      return AppFontFamily.Bold;
    case FontWeight.ExtraBold:
      return AppFontFamily.ExtraBold;
    default:
      return AppFontFamily.SemiBold;
  }
};

const getNestedText = (styleText: any, WrappedComponent: any, args: any) => {
  const { children, inlineTextPressed, mapStyle, inlineDefaultStyle } = args;
  const text = children;
  const sliced = text.split('^');
  const mArrayList: any[] = [];

  sliced.forEach((el: any, index: number) => {
    const { theme } = useContext(useTheme);
    const styles = Styles(theme);

    if (el.match(/\[.*?\]/g)) {
      const pos = el.indexOf('[') + 1;
      styleText = el.slice(pos, el.lastIndexOf(']'));
      const com = (
        <WrappedComponent
          key={+index}
          onPress={() =>
            mapStyle &&
            mapStyle[index] &&
            mapStyle[index].listenPressed &&
            inlineTextPressed
              ? inlineTextPressed(index, styleText)
              : ''
          }
          {...translateProps(
            {
              ...args,
              style:
                mapStyle && mapStyle[index] && mapStyle[index].style
                  ? mapStyle[index].style
                  : {},
              weight:
                mapStyle && mapStyle[index] && mapStyle[index].weight
                  ? mapStyle[index].weight
                  : 'normal',
            },
            mapStyle && mapStyle[index] && mapStyle[index].typography
              ? mapStyle[index].typography
              : inlineDefaultStyle,
            styles,
          )}>
          {styleText}
        </WrappedComponent>
      );
      mArrayList.push(com, el.split(']')[1]);
    } else {
      mArrayList.push(el);
    }
  });

  return mArrayList;
};
