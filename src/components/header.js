import React from 'react';
import { Platform, View, Text } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        ...Platform.select({
            ios:{
                shadowOpacity: 0.2,
            },
            android:{
                elevation: 5
            }
        }),
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    }
}

export default Header;