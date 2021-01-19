import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';

class App extends React.Component {

  state = {
    isReady: false,
  };

  componentDidMount(){
    SplashScreen.preventAutoHideAsync();
    this.animation.play();
  }

  render(){
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>

        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={require('./assets/splashscreen.json')}
          loop={false}
          onAnimationFinish={this.hideSplashScreen}
        />
          
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text> After loading</Text>
      </SafeAreaView>
    );
  }

  hideSplashScreen = async() => {
    SplashScreen.hideAsync();
    // this.setState({isReady: true})
    setTimeout(() => {
      this.setState({isReady: true})
    }, 0);
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/* <Image
            source={require('./assets/loading.gif')}
            onLoad={this.hideSplashScreen}
          /> */}