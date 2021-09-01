import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {View, Text, FlatList, StyleSheet, Modal, Pressable} from "react-native";
import {Home} from './Home';
import {getItems} from '../itemController';
import { Button } from "react-native-elements/dist/buttons/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import fire from '../fire';
import Ionicons from '@expo/vector-icons/Ionicons';

const Item = ({name, brand, category, location, confection, expiration}) => {
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text>Brand: {brand}</Text>
            <Text>Category: {category}</Text>
            <Text>Location: {location}</Text>
            <Text>Confection: {confection}</Text>
            <Text>Expiration date: {expiration}</Text>
            <TouchableOpacity>
                <Ionicons name="trash-outline"/>
            </TouchableOpacity>
        </View>
}


const Search = () => {
    const [itemList, setItemList] = useState();

    useEffect(() => {
        getData()
    })

    function getData() {
        getItems(itemRetrieved)
    }
 
    function itemRetrieved(itemList) {
        setItemList(itemList)
    }

    const renderItem = ({item}) => {
        <Item
            name={item.name}
            brand={item.brand}
            category={item.category}
            location={item.location}
            confection={item.confection}
            expiration={item.expiration}
        />
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data = {itemList}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

export default Search;

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'lightblue',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
