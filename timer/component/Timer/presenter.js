import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { render } from 'react-dom';
import Button from "../Button/index";


export default class Timer extends React.Component {
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (currentProps.isPlaying === false && nextProps.isPlaying === true) {
            //start the interval
            const timeInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000);
            this.setState({
                timeInterval
            })
        } else if (currentProps.isPlaying === true && nextProps.isPlaying === false) {
            //stop the interval
            clearInterval(this.state.timeInterval);

        }
    }



    render() {
        const { isPlaying, elapsedTime, timeDuration, startTimer, restartTimer, addSecond } = this.props;
        // console.log(`${this.props.timeDuration} check ${timeDuration}`);
       
        return (
            <View style={styles.container}>
                {/* 상단 시계와 배터리 부분의 색상 선정 */}
                <StatusBar barStyle={"light-content"}></StatusBar>

                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timeDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying
                        ? (<Button iconName="play-circle" onPress={startTimer} />)
                        : null}
                    {isPlaying
                        ? (<Button iconName="stop-circle" onPress={restartTimer} />)
                        : null}
                </View>

            </View>
        );
    }
}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
        ? `0${seconds}`
        : seconds}`;

    return;
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
        flexDirection: "row"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100",

    }
})

