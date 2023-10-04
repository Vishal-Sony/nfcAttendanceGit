import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, Pressable, ScrollView,Image,ToastAndroid} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {DataContext} from '../DataContext';
import DatePicker from 'react-native-date-picker';
import UidCard from '../components/UidCard';


export default function ClassAttendance({navigation}) {
  const route = useRoute();
  const [data, setData] = useContext(DataContext);
  const [teacherId, setTeacherId] = useState('');
  const [className, setClassName] = useState('');
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState(new Date());
  const [strDate, setStrDate] = useState('');
  const [openDatePicker, setOpenDatePicker] = useState(false);

  useEffect(() => {
    if (typeof date != 'string') {
      setStrDate(date.toISOString().slice(0, 10));
    }
  }, [date]);

  useEffect(() => {
    const val = route.params;
    setTeacherId(val.teacherId);
    setClassName(val.className);
  }, [route.params]);

  useEffect(() => {
    const foundTeacher = data.find(obj => obj.teacherId === teacherId);
    if (foundTeacher) {
      const foundClass = foundTeacher.teacherData.find(
        obj => obj.class === className,
      );
      if (foundClass) {
        const foundAttendance = foundClass.attendance.find(
          obj => obj.date === strDate,
        );

        if (foundAttendance) setAttendance(foundAttendance.uids);
        else setAttendance([]);
      }
    }
  }, [data, teacherId, className, strDate]);

  const addAttendance=()=>{
    const todayDate=new Date();
    const strTodayDate=todayDate.toISOString().slice(0, 10);
    if(strDate===strTodayDate){
      navigation.navigate('AddAttendance',{teacherId:teacherId , className:className, date:strDate})
    }
    else{
      ToastAndroid.showWithGravityAndOffset(
        'Sorry! Can\'t add past attendance -_-',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        100,
        100,
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.dateContainer}>
          <Text style={{fontSize: 23, fontWeight: 'bold', color: '#24293e'}}>{strDate}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.datePickerButton}
            onPress={() => setOpenDatePicker(true)}>
            <Image style={styles.datePickerIcon} source={require('../images/calanderIcon.png')}/>
          </Pressable>
          <Pressable
            style={styles.datePickerButton}
            onPress={addAttendance}
            >
            <Image style={styles.datePickerIcon} source={require('../images/editIcon.png')}/>
          </Pressable>
      </View>
      </View>
        <DatePicker
          modal
          mode="date"
          open={openDatePicker}
          date={date}
          onConfirm={date => {
            setOpenDatePicker(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpenDatePicker(false);
          }}
        />
      <View style={styles.attendanceContainer}>
        <ScrollView style={{width: 420}}>
          {attendance.map(uid => (
            <UidCard key={uid} uid={uid} />
          ))}
        </ScrollView>
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
  },
  attendanceContainer: {
    flex: 10,
    alignItems: 'center',
  },
  datePickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginHorizontal:5,
    right:55,
    borderRadius: 10,
    borderWidth:1.5,
    borderColor:'#24293e'
  },
  datePickerIcon: {
    height:25,
    width:25,
    resizeMode:'contain',
  },
  buttonContainer:{
    flex:2,
    flexDirection:'row'
  },
  dateContainer:{
    left:22,
    flex:5
  }
});
