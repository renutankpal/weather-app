import {StyleSheet, TextInput, Button,Dimensions, Text, View} from 'react-native';
import React, {useState} from 'react';
// import {FontAwesomeIcon} from 'react-native-vector-icons';

const WeatherSearch = ({fetchWeatherdata}) => {
  const [cityname, setCityname] = useState('');
  return (
    <View style={styles.searchbar}>
      <TextInput
        placeholder="Search City"
        value={cityname}
        onChangeText={text => setCityname(text)}
      />
      <Button
      title="search"
      onPress={() => fetchWeatherdata(cityname)}
      />
      {/* <FontAwesomeIcon
        name="search"
        size={25}
        color="black"
        onPress={() => fetchWeatherdata(cityname)}
      /> */}
    </View>
  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});
