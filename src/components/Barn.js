import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
  changeScreen,
  feedAnimals,
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

const Barn = ({
  viewHome,
  inventory,
  animals,
  onFeedAnimals,
  canFeed,
}) => (
  <View style={styles.container}>
    <Text>Feed: {inventory.feed}</Text>
    <Text>Cows: {animals.cows.length}</Text>
    {canFeed ? <Button onPress={onFeedAnimals} title="Feed" /> : null}
    <Button onPress={viewHome} title="Home" />
  </View>
)

const mapStateToProps = ({ inventory, animals }) => {
  let canFeed = true;
  if (animals.cows.length === 0) {
    canFeed = false;
  }
  if (inventory.feed < animals.cows.length) {
    canFeed = false;
  }
  if (animals.hasFedToday === true) {
    canFeed = false;
  }
  return ({ inventory, animals, canFeed });
}
const mapDispatchToProps = { changeScreen, feedAnimals };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    viewHome: ({ changeScreen }) => () => changeScreen('main'),
    onFeedAnimals: ({ feedAnimals, animals }) => () => feedAnimals(animals.cows.length),
  })
);

export default enhance(Barn);
