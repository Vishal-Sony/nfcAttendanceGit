import React,{useEffect, useState} from "react";
import nfcManager,{NfcEvents,Ndef} from "react-native-nfc-manager";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

function Game(props){
    const [start,setStart]=useState(null)
    const [duration,setDuration]=useState(0)

    useEffect(()=>{
        let count=5;
        nfcManager.setEventListener(NfcEvents.DiscoverTag,tag=>{
            const text = Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
            console.warn(text);
            count--;
            if(count<=0){
                nfcManager.unregisterTagEvent().catch(()=>0);
                setDuration(new Date().getTime()-start.getTime())
            }
        })

        return()=>{
            nfcManager.setEventListener(NfcEvents.DiscoverTag,null)
        }
    },[start])



    async function scanTag(){
       await nfcManager.registerTagEvent();
       setStart(new Date())
       setDuration(0)
    }

    return(
                <View style={styles.wrapper}>
                    <Text> NFC Game</Text>

                    {duration>0&&(
                        <Text>{duration} ms</Text>
                    )}
                    <TouchableOpacity style={styles.btn} onPress={scanTag}>
                        <Text>
                            Start
                        </Text>
                    </TouchableOpacity>
                </View>
        )
}

const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        margin:15,
        padding: 15,
        borderRadius:8,
        backgroundColor:'#ccc'
    }
});

export default Game