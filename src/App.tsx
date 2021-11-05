import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Assets} from '../assets';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {width, height} = useWindowDimensions();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: 'transparent',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ImageBackground
        source={Assets.background}
        imageStyle={{width, height}}
        resizeMode="cover">
        <View centerH marginT-100>
          <Text text50 red10>
            Hello world.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
