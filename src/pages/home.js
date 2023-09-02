import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { Divider } from '@rneui/base';

const HeadProfile = () => {
  return (
    <View style={styles.head_container}>
      <View>
        <Image style={{width: 40, height: 40, objectFit: 'contain'}} source={require('./../../assets/icons/profile.png')}/>
      </View>
      <View style={styles.body_profile}>
        <Text style={{fontWeight: 'bold', fontSize:15}}>Ahmad Jhon Doe </Text>
        <Divider/>
        <Text style={{marginTop: 3}}>IT Development Program</Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <HeadProfile />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  head_container: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor:'#F5F5F5', 
    borderColor: '#F1F0E8',

    borderWidth: 1,
    flexDirection: 'row'
  },
  body_profile: {
    marginLeft: 20
  }
});
