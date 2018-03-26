import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#dddddd',
    position: 'relative',
  },
};

const CardSection = ({ children }) => <View style={styles.containerStyle}>{children}</View>;

export { CardSection };
