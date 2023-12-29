import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Banner() {
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Raleway SemiBold', fontSize: 16,color:'#2B2B2B'}}>
          New Arrivals
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Raleway SemiBold',
              color: '#0D6EFD',
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../Assets/Image/Ads.png')} style={{height:120,width:335}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {marginTop: 18},
});
export default Banner;
