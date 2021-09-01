import React, { useState, useEffect } from "react";
import {View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Button, ScrollView, StatusBar} from "react-native";

import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);

        useEffect(() => {
            (async () => {
              const { status } = await BarCodeScanner.requestPermissionsAsync();
              setHasPermission(status === 'granted');
            })();
          }, []);
        
          const handleBarCodeScanned = ({ type, data }) => {
            setScanned(true);
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
          };
        
          if (hasPermission === null) {
            return <Text>Requesting for camera permission</Text>;
          }
          if (hasPermission === false) {
            return <Text>No access to camera</Text>;
          }

          return (
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        )

}

export default Scanner;