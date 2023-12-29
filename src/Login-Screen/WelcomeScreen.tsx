import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';



function WelcomeScreen(props:{navigation: any}) {

  
  const image = require('../../Assets/Image/bg.png');
  const [index, setIndex] = React.useState(0);

  const data = [
    {
      id: 1,
      Image: require('../../Assets/Image/Shoes1.png'),
      mainText: 'Let`s Start Journey With Nike',
      otherText: 'Smart, Gorgeous & Fashionable\n Collection Explor Now',
    },
    {
      id: 2,
      Image: require('../../Assets/Image/Shoes2.png'),
      mainText: 'You Have The\n Power To',
      otherText:
        'There Are Many Beautiful And Attractive\n Plants To Your Room',
    },
  ];
  return (
    <View style={styles.Container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1483c2'} />
      <ImageBackground style={{flex: 1}} source={image} resizeMode="cover">
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setIndex(Number((x / width).toFixed(0)));
          }}
          renderItem={({item}) => {
            return (
              <View key={item.id} style={styles.flatlistContainer}>
                <View style={styles.onlyMargin}>
                  <Image style={styles.ImageStyle} source={item.Image}></Image>
                  <Text style={styles.mainText}>{item.mainText}</Text>
                  <Text style={styles.otherText}>{item.otherText}</Text>
                </View>
              </View>
            );
          }}></FlatList>
        <View style={styles.indexContainer}>
          {data.map((line,i) => {
            return (
              <View key={line.id}
                style={{
                  backgroundColor: index == i ? '#FFB21A' : '#ffffff',
                  height: index == i ? 10 : 8,
                  width: index == i ? 30 : 10,
                  borderRadius: index == i ? 8 : 4,
                  marginBottom: 40,
                  marginLeft: 5,
                }}></View>
            );
          })}
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={()=>props.navigation.navigate('LoginScreen')}>
            <Text style={styles.btnTextStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatlistContainer: {
    width: width - 20,
    height: 400,
    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    borderRadius: 10,
    marginHorizontal: 10,
    marginLeft: 10,
  },
  onlyMargin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    width: width - 90,
    height: width - 130,
    resizeMode: 'cover',
  },
  mainText: {
    marginTop: 10,
    fontFamily: 'Raleway Bold',
    fontSize: 34,
    textAlign: 'center',
    color: '#ECECEC',
  },
  otherText: {
    marginTop: 20,
    fontFamily: 'Poppins Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#D8D8D8',
  },
  indexContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  btn: {
    width: width - 20,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  btnTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2B2B2B',
    fontFamily: 'Raleway SemiBold',
  },
});
export default WelcomeScreen;
