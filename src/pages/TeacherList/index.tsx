import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}> 
          <Feather name="filter" size={20} color="#FFF"/>
        </BorderlessButton>
      )}>
        { isFiltersVisible && (

          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a materia?"
            />
            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                />
              </View>

            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
        <ScrollView style={styles.teacherList} contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
        </ScrollView>
    </View>
  );
}

export default TeacherList;