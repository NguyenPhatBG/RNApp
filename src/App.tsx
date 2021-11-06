import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import {Text} from 'react-native-ui-lib';
import {Assets} from './assets';

const storage = new MMKV();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {width, height} = useWindowDimensions();

  React.useEffect(() => {
    storage.set('user.name', 'Marc');
    const username = storage.getString('user.name');
    console.log('username', username);
  }, []);

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
        <Text text50>Hello world.</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
