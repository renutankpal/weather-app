import {
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    View,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import WeatherSearch from '../search';
  const WeatherInfo = ({weatherData,fetchWeatherdata}) => {
    const {
      name,
      visibility,
      weather: [{icon, description}],
      main: {temp, humidity, feel_like},
      wind: {speed},
      sys: {sunrise, sunset},
    } = weatherData;
  
    return (
      <SafeAreaView style={styles.container}>
        <WeatherSearch fetchWeatherdata={fetchWeatherdata}/>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between'}}>
          <Image
            style={{width: 100, height: 100, backgroundColor:'#c5d2ef',borderRadius:15}}
            source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
          />
          <Text style={styles.tempde}>{temp} °C</Text>
        </View>
        <Text style={styles.title}>{description}</Text>
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Text style={styles.tempdedata}>{feel_like} °C</Text>
            <Text style={styles.tempde}>Feels like</Text>
          </View>
        </View>
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Text style={styles.tempdedata}>{humidity} %</Text>
            <Text style={styles.tempde}>Humadity</Text>
          </View>
        </View>
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Text style={styles.tempdedata}>{speed} m/s</Text>
            <Text style={styles.tempde}>Wind Speed</Text>
          </View>
        </View>
  
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Text style={styles.tempdedata}>
              {new Date(sunrise * 1000).toLocaleString()}
            </Text>
            <Text style={styles.tempde}>Sunrise</Text>
          </View>
        </View>
  
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Text style={styles.tempdedata}>
              {new Date(sunset * 1000).toLocaleString()}
            </Text>
            <Text style={styles.tempde}>Sunset</Text>
          </View>
        </View>
  
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Text style={styles.tempdedata}>{visibility} </Text>
            <Text style={styles.tempde}>Visibility</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default WeatherInfo;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    tempdedata:{
      textAlign: 'center',
      fontsize: 25,
      fontWeight: 'bold',
      color:'blue'
    },
    tempde: {
      textAlign: 'center',
      fontsize: 25,
      fontWeight: 'bold',
    },
    extrainfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 5,
    },
    info: {
      backgroundColor: '#d0eafa',
      padding: 12,
      borderRadius: 5,
      justifyContent: 'center',
      width: Dimensions.get('screen').width / 2,
    },
  });
  