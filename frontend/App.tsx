import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import './src/config/theme/unistyle';
import {Text, View} from 'react-native';

const App = () => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1
  },
  text: {
    color: theme.colors.typography,
  },
}));

export default App;
