import React, { useState } from 'react'
import Task from './components/Task';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

export default function App() {
  const[task, setTask] = useState();
  const[taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

    <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's task */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>

          {/* This view will contain all the tasks */}
          <View style={styles.items}>
            {/* This is where the tasks will go */}
            {
              taskItems.map((items, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text={items} /> 
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    {/* Write a task */}
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontStyle: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addText: {
    fontSize: 48
  }
});
