import React, { useState } from "react";
import {View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Button, ScrollView, StatusBar} from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {addItem} from '../itemController';
import {useNavigation} from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [confection, setConfection] = useState("");
    const [expiration, setExpiration] = useState("");

    const newItem = () => {
        var item = {
            "name": name,
            "brand": brand,
            "category": category,
            "location": location,
            "confection": confection,
            "expiration": expiration
        }

        addItem(item, addComplete)
    }

    function addComplete() {
        navigation.navigate("Home")
    }

    const categoryRadio = [
        {
            label: 'Fruit'
        },
        {
            label: 'Vegetables'
        },
        {
            label: 'Dairy'
        },
        {
            label: 'Meat'
        },
        {
            label: 'Fish'
        },
        {
            label: 'Pasta'
        },
        {
            label: 'Sweets'
        },
        {
            label: 'Sauces'
        },
        {
            label: 'Bases'
        },
        {
            label: 'Miscellaneous'
        }
    ];
    
    const locationRadio = [
        {
            label: 'Pantry'
        },
        {
            label: 'Fridge'
        },
        {
            label: 'Freezer'
        }
    ];

    const confectionRadio = [
        {
            label: 'Fresh'
        },
        {
            label: 'Canned'
        },
        {
            label: 'Frozen'
        },
        {
            label: 'Packaged'
        }
    ];

    function goToScanner() {
        navigation.navigate("Scanner");
    }

    function renderHeader() {
        return (
            <View style={{flexDirection: 'row', height: 50, backgroundColor: 'white'}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 15,
                        justifyContent:'center',
                    }}
                    onPress={() => goToScanner()}
                >
                    <Ionicons name={'barcode'} color={'black'} size={33}/>
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                    <View style={{
                        width: '70%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold',}}>Home</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: 15,
                        justifyContent: 'center',
                    }}
                >
                    <Ionicons name={'notifications'} color={'black'} size={30}/>
                </TouchableOpacity>
                
            </View>
        )
    }

    function renderForm() {
        return (
            <ScrollView>
                    <View>
                        <Text style={styles.title}>To add a new ingredient, fill out the information below!</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Insert name'
                            value={name}
                            onChangeText={text => setName(text)} 
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Insert brand'
                            value={brand}
                            onChangeText={text => setBrand(text)}     
                        />
                        <Text style={styles.text}>Choose a category:</Text>
                        <RadioButtonRN
                            data={categoryRadio}
                            selectedBtn={(category) => setCategory(category)}
                        />
                        <Text style={styles.text}>Choose a location:</Text>
                        <RadioButtonRN
                            data={locationRadio}
                            selectedBtn={(location) => setLocation(location)}
                        />
                        <Text style={styles.text}>Choose a confection type:</Text>
                        <RadioButtonRN
                            data={confectionRadio}
                            selectedBtn={(confection) => setConfection(confection)}
                        />
                        <Text>Choose expiration date:</Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType={'numbers-and-punctuation'}
                            placeholder='dd/mm/yyyy'
                            value={expiration}
                            onChangeText={text => setExpiration(text)}      
                        />

                        <Button
                        title='Add Item'
                        onPress={() => newItem()}
                        />
                    </View>
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderForm()}
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    input: {
        borderColor: "blue",
        width: '95%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5,
        color: 'blue',
    },
    text: {
        padding: 10,
        color: 'blue',
        fontSize: 15,
    },
    picker: {
        width: '95%',
        marginLeft: 10,
    },
 })