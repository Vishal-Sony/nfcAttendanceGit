import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, Pressable, ScrollView,Image} from 'react-native';
import LottieView from "lottie-react-native";
import {useRoute} from '@react-navigation/native';
import {DataContext} from '../DataContext';
import UidCard from '../components/UidCard';
import attendanceAnimation from '../animations/attendance.json'
import nfcManager,{NfcEvents,Ndef} from "react-native-nfc-manager";


export default function AddAttendance({navigation}) {
  const route = useRoute();
  const [data, setData] = useContext(DataContext);
  const [teacherId, setTeacherId] = useState('');
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState([]);


  useEffect(() => {
    const val = route.params;
    setTeacherId(val.teacherId);
    setClassName(val.className);
    setDate(val.date);
  }, [route.params]);

  useEffect(() => {
    const foundTeacher = data.find(obj => obj.teacherId === teacherId);
    if (foundTeacher) {
      const foundClass = foundTeacher.teacherData.find(
        obj => obj.class === className,
      );
      if (foundClass) {
        const foundAttendance = foundClass.attendance.find(
          obj => obj.date === date,
        );

        if (foundAttendance) setAttendance(foundAttendance.uids);
        else setAttendance([]);
      }
    }
  }, [data, teacherId, className, date]);

  useEffect( ()=>{
    (async()=> {
             await nfcManager.registerTagEvent();
      })();

    },[])

    useEffect(()=>{

        nfcManager.setEventListener(NfcEvents.DiscoverTag,tag=>{
            var text = Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
            text=text.slice(14)
            setAttendance([...attendance, text]); 
        })

        return()=>{
            nfcManager.setEventListener(NfcEvents.DiscoverTag,null)
        }
    },[attendance])

    const saveData=()=>{
        nfcManager.unregisterTagEvent().catch(()=>0);
        

        const updatedData = [...data];
        const teacherIndex = updatedData.findIndex((teacher) => teacher.teacherId === teacherId);
        if (teacherIndex !== -1) {
            const classIndex = updatedData[teacherIndex].teacherData.findIndex(
                (classData) => classData.class === className
            );
            if (classIndex !== -1) {
                const dateIndex = updatedData[teacherIndex].teacherData[classIndex].attendance.findIndex(
                    (entry) => entry.date === date
                );
                if (dateIndex !== -1) {
                    updatedData[teacherIndex].teacherData[classIndex].attendance[dateIndex].uids = attendance;
        } else {
                
            updatedData[teacherIndex].teacherData[classIndex].attendance.push({
                date: date,
                uids: attendance,
              });
            }

            setData(updatedData);
        }
    }

          
        navigation.navigate('ClassAttendance',{teacherId:teacherId , className:className})

    }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <Pressable
            style={styles.datePickerButton}
            onPress={saveData}
            >
            <Image style={styles.datePickerIcon} source={require('../images/saveIcon.png')}/>
          </Pressable>
      </View>
      <View style={styles.attendanceContainer}>
        <ScrollView style={{width: 420}}>
          {attendance.map(uid => (
            <UidCard key={uid} uid={uid} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <LottieView source={attendanceAnimation} autoPlay loop style={styles.animation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F5Fc',
  },
  headerContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    top:10,
  },
  attendanceContainer: {
    top:10,
    flex: 10,
    alignItems: 'center',
  },
  footerContainer:{
    flex: 3,
    alignItems: 'center',
  },
  datePickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginHorizontal:5,
    borderRadius: 10,
    borderWidth:1.5,
    borderColor:'#24293e',
    left:160
  },
  datePickerIcon: {
    height:25,
    width:25,
    resizeMode:'contain',
  },
  animation:{
    height:300,
    width:300,
    bottom:40
}
});
