import { Dimensions, StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(38, 103, 201)',
        height: '100%',
    },
    loginContainer: {
        height: '100%'
    },
    imageContainer: {
        marginTop: 300,
        flexDirection: 'row',
        marginLeft: 40
    },
    imageText: {
        color: '#fff',
        marginLeft: 20,
        fontSize: 50
    },
    mainContainer: {
        backgroundColor: 'rgb(38, 103, 201)',
        height: '80%',
    },

    loginHeader: {
        flexDirection: 'row',
        marginTop: 80,
        marginLeft: 20,
        width: '100%'
    },
    headerText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 50
    },
    mainWrapper: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    mainHeader: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    mainText: {
        marginTop: 20,
        color: '#fff',
        fontSize: 25,
        lineHeight: 40
    },
    inputWrapper: {
        marginTop: 60,
        flexDirection: 'row'
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        width: 250
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    lineSeparator: {
        borderStyle: 'solid',
        height: '100%',
        borderLeftWidth: 2,
        marginLeft: 5
    },
    textInput: {
        flex: 1
    },
    button: {
        borderRadius: 5,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
        width: 50,
        height: 40,
        marginTop: 10
    },
    buttonText: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#fff',
        alignSelf: 'center',
        marginTop: 5
    },
    bottomWrapper: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },
    bottomText: {
        marginLeft: 10,
        marginTop: 10,
        color: '#fff'
    },
    socialContainer: {
        height: '100%',
        backgroundColor: 'rgb(249, 249, 249)'
    },
    socialWrapper: {
        flexDirection: 'row',
        marginTop: 25
    },
    facebookContainer: {
        marginLeft: 30,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#383838',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 120,
        height: 40,
        marginTop: 10,
        alignItems: 'center',

    },
    facebookIcon: {
        marginLeft: 10
    },
    facebookText: {
        marginLeft: 10,
        fontSize: 20,
        color: '#6B6B6B'
    },
    googleContainer: {
        marginLeft: 30,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 120,
        height: 40,
        marginTop: 10,
        alignItems: 'center',
    },
    googleIcon: {
        marginLeft: 10
    },
    googleTextWrapper: {
        height: '100%',
        backgroundColor: 'rgb(38, 103, 201)',
        borderRadius: 6,
        marginLeft: 10,
        width: 79.,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleText: {
        color: '#fff',
        fontSize: 16
    }




})