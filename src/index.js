import {StyleSheet, Text, View, Alert, TextInput,ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import WeatherInfo from './WeatherInfo'
//Put your Api key
const API_Key = '1f4b27430f5aaebe9cc72452fafacaa6';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  // add a function to fetch the weather api data

  const fetchWeatherdata = async (cityname) => {
    try {
      setLoading(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${API_Key}`,
      );
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoading(true);
    } catch (error) {
      // console.log(error);
      Alert.alert('Error', error.message);
    }
  };

// remember my city name

useEffect(()=>{
  fetchWeatherdata('Indore');
}, []);

// if data is not loaded , showing loading messeage\

if(!loading){
    return(
        <View style={styles.container}>
    
        <ActivityIndicator  size ="large" color= "blue"/>
     
    </View>
    )
}


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Weather App</Text>
      </View>

      <WeatherInfo
       weatherData={weatherData} fetchWeatherdata ={fetchWeatherdata}
      /> 
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    fontSize:20,
    color:'#000000'
  },
  header:{
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'#c5d2ef',
    height:50,
    paddingHorizontal:20,
    width:'100%',
    marginTop:5
  }
});
