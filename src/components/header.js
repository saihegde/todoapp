import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>To Do App</Text>
        </View>    
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    }
}

export default Header;