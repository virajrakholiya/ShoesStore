import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Category from './Category'
import ShoesList from './ShoesList';
import Banner from './Banner';

function MainScreen() {
  return (
    <View style={{height: '100%', backgroundColor: '#ffffff'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#ffffff'}></StatusBar>
      <View style={styles.Container}>
        <View style={styles.header}>
            <TouchableOpacity>
          <Icon name="menu" size={20} color={'#2B2B2B'} /></TouchableOpacity>

          <Text style={styles.headerText}>Explore</Text>
          <TouchableOpacity>
          <Icon2
            name="shopping-outline"
            size={20}
            color={'#2B2B2B'}
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#f0f0f0',
              padding: 10,
              borderRadius: 50,
            }}
          /></TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.inputStyle}>
            <Icon name="search" size={20} style={{marginLeft: 10}} />
            <TextInput
              placeholder="Looking For Shoes"
              style={{fontFamily: 'Poppins Regular',marginTop:3,marginLeft:10,width:290}}></TextInput>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableOpacity>
            <Icon3
              name="sliders"
              size={20}
              color={'#f0f0f0'}
              style={styles.inputIcon3}
            /></TouchableOpacity>
          </View>
        </View>
        <Category />
        <ShoesList />
        <Banner />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    marginTop: 13,
  },
  header: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Raleway Bold',
    fontSize: 32,
    marginLeft: 13,
    color:'#2B2B2B'
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: 290,
    height: 50,
    marginTop: 10,
    borderRadius: 15,
  },
  inputIcon3: {
    width: 40,
    height: 40,
    backgroundColor: '#0D6EFD',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
});
export default MainScreen;
