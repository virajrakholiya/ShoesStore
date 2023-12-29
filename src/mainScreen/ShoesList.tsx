import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

function ShoesList() {
  const data = [
    {
      id: 1,
      image: require('../../Assets/Image/Shoes3.png'),
      title: 'Nike Jordan',
      name: 'Best Seller',
      Price: '$302.6',
    },
    {
      id: 2,
      image: require('../../Assets/Image/Shoes4.png'),
      title: 'Nike Air Max',
      name: 'Best Seller',
      Price: '$402.6',
    },
    {
      id: 3,
      image: require('../../Assets/Image/Shoes3.png'),
      title: 'Nike Air Max',
      name: 'Best Seller',
      Price: '$736.6',
    },
  ];

  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Text
          style={{color: '#2B2B2B', fontSize: 16, fontFamily: 'Raleway Bold'}}>
          Popular Shoes
        </Text>
        <TouchableOpacity>
          <Text style={{fontFamily: 'Raleway Bold', color: '#0D6EFD'}}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => (
          <View key={item.id} style={styles.flatListStyle}>
            <Image style={{height: 120, width: 150}} source={item.image} />
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Poppins Regular', color: '#0D6EFD'}}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: 'Raleway SemiBold',
                  color: '#6A6A6A',
                  fontSize: 16,
                }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins Regular',
                  color: '#2B2B2B',
                  marginLeft: 10,
                }}>
                {item.Price}
              </Text>
              <TouchableOpacity>
                <Icon
                  name="plus"
                  color={'#ffffff'}
                  size={17}
                  style={{
                    height: 32,
                    width: 30,
                    backgroundColor: '#0D6EFD',
                    padding: 7,
                    borderRadius: 15,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}></Icon>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 12,
  },
  flatListStyle: {
    width: 160,
    height: 200,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    borderRadius: 15,
  },
});
export default ShoesList;
