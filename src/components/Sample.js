import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import {
  changeSampleText,
  endDay,
  changeScreen,
 } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const App = ({
  sample,
  onClickText,
  onChangeText,
  inputText,
  time,
  viewShop,
  viewBarn,
  onEndDay,
  inventory,
  animals,
}) => (
  <View style={styles.container}>
    <Text>Day: {time.day}</Text>
    <Text>Month: {time.month}</Text>
    <Text>Year: {time.year}</Text>
    <Text>Gold: {inventory.gold}</Text>
    <Text>Cows: {animals.cows.length}</Text>
    <Button onPress={onEndDay} title="End Day" />
    <Button onPress={viewShop} title="Shop" />
    <Button onPress={viewBarn} title="Barn" />
    <TextInput style={styles.input} onChangeText={onChangeText} value={inputText} />
    <Text style={styles.text} onPress={onClickText}>{ sample }</Text>
  </View>
)

const mapStateToProps = ({ sample, time, inventory, animals }) => ({ sample, time, inventory, animals });
const mapDispatchToProps = { changeSampleText, changeScreen, onEndDay: endDay };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('inputText', 'changeText', ''),
  withHandlers({
    onChangeText: ({ changeText, changeSampleText }) => (text) => { changeText(text); changeSampleText(text) },
    onClickText: ({ changeSampleText, inputText }) => () => changeSampleText(inputText),
    viewShop: ({ changeScreen }) => () => changeScreen('shop'),
    viewBarn: ({ changeScreen }) => () => changeScreen('barn'),
  })
);

export default enhance(App);
