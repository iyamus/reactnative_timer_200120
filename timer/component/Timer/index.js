import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { render } from 'react-dom';
import Button from "../Button/index";

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
                    <Button iconName="play-circle" onPress={()=>{alert("1")}}/>
                    <Button iconName="stop-circle" onPress={()=>{alert("2")}}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100",
       
    }
})

