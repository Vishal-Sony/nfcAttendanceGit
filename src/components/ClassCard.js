import React from 'react';
import {Text, View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ClassCard({className,teacherId}) {
  const navigation = useNavigation();

  // console.log(className,teacherId);
  const cardClick=()=>{
    navigation.navigate('ClassAttendance',{teacherId:teacherId , className:className})
}
  return (
  <>
    <TouchableOpacity style={styles.cardItem} onPress={cardClick}>
        <View style={styles.leftItem}>
        <Image style={styles.leftIcon} source={require('../images/classIcon.png')}/>
        </View>
        <View style={styles.rightItem}>
            <Text style={styles.rightText}>{className}</Text>
            <Image style={styles.rightIcon} source={require('../images/rightIcon.png')}/>
        </View> 
    </TouchableOpacity>
      </> 
  );
}

const styles = StyleSheet.create({
  cardItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection:'row',
    
},
leftItem:{
    borderBottomLeftRadius:15,
    borderTopLeftRadius:15,
    padding:20,
    paddingBottom:25,
    flex:1,
    backgroundColor:'#8EBBFF',
    alignItems:'center',
    justifyContent:'center'
  },
  leftIcon:{
    height:35,
    width:35,
    resizeMode:'contain',
    // opacity:0
  },
  rightItem:{
    borderBottomRightRadius:15,
    borderTopRightRadius:15,
    backgroundColor:'#DDE6ED',
    flex:6,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  rightText:{
    flex:1,
    color:'#24293e',
    fontSize:20,
    fontWeight: 'bold', 
    left:105
  },
  rightIcon:{
    flex:1,
    left:50,
    height:23,
    width:23,
    resizeMode:'contain'
  }
});
