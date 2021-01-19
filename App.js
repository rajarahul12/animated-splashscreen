import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';

class App extends React.Component {

  state = {
    isReady: false,
  };

  componentDidMount(){
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
          autoPlay
          source={require('./assets/splashscreen.json')}
          loop={false}
          onAnimationFinish={this.hideSplashScreen}
        />
          
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1, alignItems:"center", justifyContent:"center" }}>
        <Text style={{fontSize: 30, backgroundColor:"#ffc55c"}}>Welcome to Fast Service</Text>
      </SafeAreaView>
    );
  }

  hideSplashScreen = async() => {
    SplashScreen.hideAsync();
    this.setState({isReady: true})

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
