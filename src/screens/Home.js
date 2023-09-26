import React,{useEffect, useState} from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import card from "../images/card2.png"
import LottieView from "lottie-react-native";
import tapAnimation from "../animations/tap.json"

function Home(props){
        return(
                <View style={styles.wrapper}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>Touch-In <Text style={{fontWeight:'300',color:'#D8D9DA'}}>Time</Text></Text>
                    <LottieView source={tapAnimation} autoPlay loop style={styles.animation}/>
                        {/* <Image source={card} style={styles.logoImage}/> */}
                    </View>
                    <View style={styles.welcomeText}>
                        <Text style={styles.tapHeader}>Welcome</Text>
                        <Text style={styles.tapFooter}>Tap your card please</Text>
                    </View>
                </View>
        )
    
}

const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#42858c'
    },
    logo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        
    },
    welcomeText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50
    },
    logoText: {
        fontSize: 50,
        fontWeight: 'bold', 
        color: '#35393c',
        marginTop:150
      },
    logoImage:{
        width:250,
        height:250,
        resizeMode:'contain',
        marginTop:50
    },
    tapHeader:{
        fontSize: 40,
        fontWeight: 'bold', 
        color: '#35393c',

    },
    tapFooter:{
        fontSize:20,
        fontWeight: '300', 
        color: '#D8D9DA',
    },
    animation:{
        height:400,
        width:400,
        marginRight:5

    }
});

export default Home