import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

function Category() {
  const data = [
    {id: 1, name: 'All Shoes'},
    {id: 2, name: 'Outdoor'},
    {id: 3, name: 'Tennis'},
    {id: 4, name: 'Sport'},
  ];

  const [color, setColor] = React.useState(null);

  const handler = (id: any) => {
    setColor(currentColor => (currentColor === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Raleway Bold', fontSize: 16,color:'#2B2B2B'}}>
        Select Category
      </Text>
      <View style={{marginTop: 8}}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                width: 100,
                height: 40,
                backgroundColor: color === item.id ? '#0D6EFD' : '#f0f0f0',
                justifyContent: 'center',
                marginRight: 10,
                borderRadius: 15,
              }}>
              <TouchableOpacity onPress={() => handler(item.id)}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins Regular',
                    color: color === item.id ? '#FFFFFF' : '#000000',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});

export default Category;
