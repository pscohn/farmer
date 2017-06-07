import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import {
  changeScreen,
  buyCow,
  setGold,
  buyFeed,
} from '../actions';
import config from '../config';

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

const Shop = ({
  viewHome,
  inventory,
  animals,
  onBuyCow,
  onBuyFeed,
}) => (
  <View style={styles.container}>
    <Text>Gold: {inventory.gold}</Text>
    <Text>Cows: {animals.cows.length}</Text>
    <Text>Feed: {inventory.feed}</Text>
    <Button onPress={onBuyCow} title="Buy Cow: 100g" />
    <Button onPress={onBuyFeed} title={`Buy Feed: ${config.feedPrice}g`} />
    <Button onPress={viewHome} title="Home" />
  </View>
)

const mapStateToProps = ({ inventory, animals }) => ({ inventory, animals });
const mapDispatchToProps = { changeScreen, buyCow, buyFeed, setGold };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    viewHome: ({ changeScreen }) => () => changeScreen('main'),
    onBuyFeed: ({ buyFeed, setGold, inventory: { gold } }) => () => {
      if (gold >= config.feedPrice) {
        buyFeed();
        setGold(gold - config.feedPrice);
      }
    },
    onBuyCow: ({ buyCow, setGold, inventory: { gold } }) => () => {
      if (gold >= config.cow.price) {
        buyCow();
        setGold(gold - config.cow.price);
      }
    },
  })
);

export default enhance(Shop);
