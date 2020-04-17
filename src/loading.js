import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

// import soda from '../assets/soda_loader.json';
import soda from '../assets/142-loading-animation.json';
import { colors } from './styles';


export default class LottieLoader extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SleepWell is loading...</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 150,
              height: 150,
              aspectRatio: 3
            }}
            loop={true}
            source={soda}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: "Bimbo-Regular-trial"
  }
});