import React,{useState} from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import { Styles } from '../styles/Styles';

export default function Login(){
    const{phoneNo, setPhoneNumber}=useState(null)

    return(
        <View style={Styles.loginContainer}>
            <View style={Styles.mainContainer}>
                <View style={Styles.loginHeader}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={Styles.headerText}>Pickmeup</Text>
                </View>
                <View style={Styles.mainWrapper}>
                    <Text style={Styles.mainHeader}>Hey there!</Text>
                    <Text style={Styles.mainText}>Type in your phone number to get started</Text>

                    <View style={Styles.inputWrapper}>
                        <View style={Styles.SectionStyle}>
                            <Image
                                source={require('../assets/flag.png')} //Change your icon image here
                                style={Styles.imageStyle}
                            />
                            <Text>+234</Text>
                            <View style={Styles.lineSeparator}/>

                            <TextInput
                                style={Styles.textInput}
                                placeholder="08131236567"
                                underlineColorAndroid="transparent"
                                keyboardType = 'number-pad'
                                onPress={(no)=>setPhoneNumber(no)}
                            />
                        </View>
                        <TouchableOpacity style={Styles.button}>
                            <Text style={Styles.buttonText}>GO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.bottomWrapper}>             
                    <Text style={Styles.bottomText}>or you can sign up with</Text>
                </View>
            </View>
            <View style={Styles.socialContainer}>
                <View style={Styles.socialWrapper}>
                    <TouchableOpacity style={Styles.facebookContainer}>
                        <Image
                            source={require('../assets/facebook-square.png')}
                            style={Styles.facebookIcon}
                        />
                        <Text style={Styles.facebookText}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.googleContainer}>
                        <Image
                            source={require('../assets/google.png')} 
                            style={Styles.googleIcon}
                            
                        />
                        <View style={Styles.googleTextWrapper}>
                            <Text style={Styles.googleText}>Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        
    )
}