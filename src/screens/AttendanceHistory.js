import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useState, useEffect, useContext} from 'react';
import ClassCard from '../components/ClassCard';
import {DataContext} from '../DataContext';

export default function AttendanceHistory() {
  const route = useRoute();
  const [teacherId, setTeacherId] = useState('');
  const [data, setData] = useContext(DataContext);
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const val = route.params;
    setTeacherId(val.teacherId);
  }, [route.params]);

  useEffect(() => {
    const foundTeacher = data.find(obj => obj.teacherId === teacherId);
    if (foundTeacher) setTeacherData(foundTeacher.teacherData);
  }, [data, teacherId]);


  return (
    <View style={styles.wrapper}>
      <View style={styles.welcome}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#24293e'}}>
          Welcome {teacherId}
        </Text>
      </View>
      <View style={styles.cardContainer}>
          {teacherData.map(val => (
            <ClassCard
              key={val.class}
              className={val.class}
              teacherId={teacherId}
            />
          ))}
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F4F5Fc',
  },
  welcome: {
    padding: 25,
    backgroundColor: '#DDE6ED',
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  cardItem: {
    width: '30%',
    padding: 10,
    marginBottom: 10,
  },
});
