
import React, {useState} from 'react';
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] =useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    
  }
  //creating function for delete
  const completeTask = (index) => {
    
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle ={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps = 'handled'
        >
      <View style= {styles.taskWrapper}>
        <Text style = {styles.title}>Today's Tasks!</Text>
        
        <View styles={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
          
        </View>
       </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+

            </Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
    /*Write a task*/

  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    
    paddingBottom: 30
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },

  container: {
    
    flex: 1,
    backgroundColor: '#f4f4',
    paddingTop: 80,
    paddingHorizontal: 20,  
  },
  container1: {
    flex: 1,
    fontSize: 22,
    
  },
  items: {
    margin: 30,
    padding: 80,
    paddingHorizontal: 20,

  },
  addText: {

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'


  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250

  }

});
