import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { render } from 'react-dom';

export default class Timer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 상단 시계와 배터리 부분의 색상 선정 */}
                <StatusBar barStyle={"light-content"}></StatusBar>
               
                <View style={styles.upper}>
                    <Text style={styles.time}>24:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text>Button</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems:"center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    time: {
        color:"white",
        fontSize: 120, 
        fontWeight: "100"
    }
})

