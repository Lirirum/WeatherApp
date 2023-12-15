import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const SevenDayForecast = ({ forecastData }) => {
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: `https://openweathermap.org/img/wn/${item.icon}.png` }} style={styles.weatherIcon} />
      <View style={styles.textContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.temperatureText}>{item.temperature}°C</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={forecastData}
      keyExtractor={(item) => item.date}
      renderItem={renderItem}
      style={styles.forecastList}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333333',
  },
  temperatureText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  weatherIcon: {
    width: 40,
    height: 40,
  },
  forecastList: {
    width: '100%',
  },
});

export default SevenDayForecast