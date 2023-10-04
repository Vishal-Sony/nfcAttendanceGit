import React,{useEffect, useState} from "react";
import nfcManager from "react-native-nfc-manager";
import { View,Text,StyleSheet } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from "./DataContext";

function App(){
    const [hasNfc,setHasNfc]=useState(null)


    useEffect(()=>{
        async function checkNfc(){
          const supported=  await nfcManager.isSupported();
          if(supported){
            await nfcManager.start();
          }
          setHasNfc(supported)
        }
        checkNfc()
    },[])

    if(hasNfc===null)return null;
    else if(!hasNfc){

        return(

                <View style={styles.wrapper}>
                    <Text>Your device doesn't support NFC</Text>
                </View>

        )
    }

    return(
        <DataProvider>
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
        </DataProvider>
    ) 

}

const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default App