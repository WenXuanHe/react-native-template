import { StyleSheet } from 'react-native';

const indexStyle = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            marginBottom: 100
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
        myInput: {
            height: 40,
            width: 100,
        },
        button: {
            marginBottom: 30,
            width: 260,
            alignItems: 'center',
            backgroundColor: '#2196F3'
        },
        buttonText: {
            padding: 20,
            color: 'white'
        }
});

export {
    indexStyle
};
