import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import Icon from 'react-native-vector-icons/AntDesign';

const HeadProfile = () => {
  return (
    <View style={styles.head_container}>
      <View>
        <Image
          style={{width: 40, height: 40, objectFit: 'contain'}}
          source={require('./../../assets/icons/profile.png')}
        />
      </View>
      <View style={styles.body_profile}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Ahmad Jhon Doe </Text>

        <Text style={{marginTop: 3}}>IT Development Program</Text>
      </View>
    </View>
  );
};

const MenuInfo = () => {
  return (
    <View style={styles.container_menu}>
      <ScrollView>
        <View style={styles.container_body}>
          <Text>Today is Independence Day</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}> 
          <Icon name='calendar'/>
          <Text style={{marginLeft:5, fontSize: 12}}>12/12/2020</Text> 
          <Text style={{marginLeft:5, fontSize: 12, fontWeight: 'bold'}}>| Leave</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <HeadProfile />
      <View style={{padding: 10, paddingVertical: 20}}>
        <Text style={{fontWeight: 'bold'}}>Recent Request Leave</Text>
      </View>
      <MenuInfo />
      <Divider/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  head_container: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ECE5C7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body_profile: {
    marginLeft: 20,
  },
  container_menu: {
    paddingHorizontal: 10,
    marginBottom: 20
  },
  container_body: {
    width: '70%' ,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#f1f0e8'
  }
});
