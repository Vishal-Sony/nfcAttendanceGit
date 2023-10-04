import React,{useEffect, useState} from "react";
import { View,Text,StyleSheet, } from "react-native";
import LottieView from "lottie-react-native";
import tapAnimation from "../animations/tap.json"
import nfcManager,{NfcEvents,Ndef} from "react-native-nfc-manager";

function Home({navigation}){

    useEffect( ()=>{
        (async()=> {
                 await nfcManager.registerTagEvent();
          })();

        nfcManager.setEventListener(NfcEvents.DiscoverTag,tag=>{
            var text = Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
            text=text.slice(14)
            nfcManager.unregisterTagEvent().catch(()=>0);
            navigation.navigate('AttendanceHistory',{teacherId:text})
        })

        return()=>{
            nfcManager.setEventListener(NfcEvents.DiscoverTag,null)
        }
    },[])

        return(
                <View style={styles.wrapper}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>Touch-In <Text style={{fontWeight:'300',color:'#8EBBFF'}}>Time</Text></Text>
                    <LottieView source={tapAnimation} autoPlay loop style={styles.animation}/>
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
        backgroundColor:'#F4F5Fc',
        
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
        color: '#24293e',
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
        color: '#24293e',
    },
    tapFooter:{
        fontSize:20,
        fontWeight: '300', 
        color: '#8EBBFF',
    },
    animation:{
        height:400,
        width:400,
        marginRight:5

    }
});

export default Home