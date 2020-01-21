import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
    return (
        // onPress={onPress} 
        // 앞에 있는 것은 해당 버튼 터치 수행하는 기능이고, 
        // 뒤에 있는 것은 파라미터로 넘어온 값이다.
        <TouchableOpacity onPressOut={onPress}>
            {/* FontAwesome은 expo에서 기본 제공하는 이미지를 가져오기 위함이다. */}
            <FontAwesome name={iconName} size={80} color="white" ></FontAwesome>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;