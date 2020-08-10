import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import Login from './Login';
import { Styles } from '../styles/Styles';


export default class Splash extends Component{
    constructor(){
        super()

        this.state = {
            
            timePassed:false
        }
    }

    componentDidMount() {
       
       this.setState({ loading: false })

       setTimeout( () => {
           this.setTimePassed();
       },2000);
    }


    setTimePassed() {
        this.setState({timePassed: true});
    }

    

    render(){
        if (!this.state.timePassed) {

        
            return (  
                <View style={Styles.container}>
                    <View style={Styles.imageContainer}>
                        <Image source={require('../assets/logo.png')}/>
                        <Text style={Styles.imageText}>Pickmeup</Text>
                    </View>
                    
                    
                </View>
            );

        } else {
            return <Login/>;
        }

    }

}