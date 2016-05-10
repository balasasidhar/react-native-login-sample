/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';

class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <ToolbarAndroid
                    title="AwesomeProject"
                    actions={[{title: 'Settings', show: 'never'}]}
                    titleColor="#fff"
                    style={styles.toolbar}>
                </ToolbarAndroid>

                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    toolbar: {
        backgroundColor: '#03A9F4',
        height: 56,
        elevation: 5
    },
    textInput: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 16
    },
    button: {
        height: 45,
        width: 200,
        marginTop: 10,
        backgroundColor: '#03A9F4',
        elevation: 5,
        paddingTop: 10,
        borderRadius: 4
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center"
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
