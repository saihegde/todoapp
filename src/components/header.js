import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

const Header = () => {
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>To Do App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default Header;