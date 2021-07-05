import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles } from './Screen.styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ScreenProps {}

export const Screen = ({ children }: PropsWithChildren<ScreenProps>): JSX.Element => (
  <View style={styles.screen}>{children}</View>
);
