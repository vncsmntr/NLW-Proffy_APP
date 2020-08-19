import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import aSyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';



function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<Number>([]);
  
  // Armazena info que o user colocou no form
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useFocusEffect(() => {
    loadFavorites();
  });

  // Liga ou desliga o filtro
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  function loadFavorites() {
    aSyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  // envia os dados ao db
  async function handleFilterSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>

      <PageHeader title="Proffys Disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}> 
          <Feather name="filter" size={20} color="#FFF"/>
        </BorderlessButton>
        )}>

        {/* Form de busca */}

        { isFiltersVisible && (

          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a materia?"
            />
            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                />
              </View>

            </View>
            <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}

        {/* Fim do Form */}

        </PageHeader>

          <ScrollView style={styles.teacherList} contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}>
          {teachers.map((teacher: Teacher) => {
            return ( 
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher} 
              favorited={favorites.includes(teacher.id)}
            /> )})}
        </ScrollView>
      </View>
  );
}


export default TeacherList;