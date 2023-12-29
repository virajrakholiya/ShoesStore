import * as React from 'react';
import {Touchable, TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function LoginScreen(props: {navigation: any}) {
  return (
    <View style={{backgroundColor: '#ffffff', height: '100%'}}>
      <View style={styles.Container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('WelcomeScreen')}>
            <Icon
              name="chevron-back-outline"
              size={20}
              color={'#2B2B2B'}
              style={styles.backIcon}></Icon>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.mainText}>Hello Again!</Text>
          <Text style={styles.subText}>
            Fill your details or continue with{'\n'}social media
          </Text>
        </View>
        <View>
          <Text style={styles.InputRef}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="xyz@gmail.com"></TextInput>
          <Text style={[styles.InputRef, styles.onlyMargin]}>Password</Text>
          <View
            style={{
              alignItems: 'center',
              height: 50,
              width: width - 20,
              flexDirection: 'row',
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
            }}>
            <TextInput
              style={[styles.input, styles.input2]}
              placeholder="Password"
              secureTextEntry></TextInput>
            <TouchableOpacity>
              <Icon name="eye-off" size={20} style={{}}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 6}}>
          <TouchableOpacity>
            <Text style={{fontFamily: 'Poppins Regular', fontSize: 12}}>
              Recovery Password
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => props.navigation.navigate('MainScreen')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#ffffff',
                  fontSize: 14,
                  fontFamily: 'Raleway Bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn2}
              onPress={() => props.navigation.navigate('MainScreen')}>
              <Icon
                name="logo-google"
                size={20}
                style={{marginLeft: 80}}></Icon>
              <Text
                style={{
                  marginLeft: 7,
                  textAlign: 'center',
                  color: '#2B2B2B',
                  fontSize: 14,
                  fontFamily: 'Raleway Bold',
                }}>
                Sign in With Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 120,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Poppins Regular', fontSize: 14}}>
              New User?
            </Text>
            <Text style={{fontFamily: 'Raleway Bold'}}> Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  Container: {
    marginTop: 13,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  backIcon: {
    backgroundColor: '#f0f0f0',
    width: 40,
    height: 40,
    borderRadius: 50,
    padding: 9,
  },
  mainText: {
    fontFamily: 'Raleway Bold',
    fontSize: 32,
    color: '#2B2B2B',
  },
  subText: {
    fontFamily: 'Poppins Regular',
    fontSize: 16,
    color: '#707B81',
    textAlign: 'center',
    marginTop: 4,
  },
  InputRef: {
    fontFamily: 'Raleway Bold',
    marginBottom: 6,
  },
  onlyMargin: {
    marginTop: 15,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    fontFamily: 'Poppins Regular',
    padding: 10,
    paddingTop: 10,
    alignContent: 'center',
  },
  input2: {
    width: width - 50,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },
  btn: {
    marginTop: 12,
    width: width - 20,
    backgroundColor: '#0D6EFD',
    padding: 10,
    borderRadius: 10,
  },
  btn2: {
    marginTop: 12,
    width: width - 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
export default LoginScreen;
