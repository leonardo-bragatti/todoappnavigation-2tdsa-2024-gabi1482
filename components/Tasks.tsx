import React, { useState } from "react";
import { TextInput, FlatList, Button, View, Text } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

//AQUI É CRIADO UM OBJETO CHAMADO Task
export type Task = {
  name: string;
  createdAt: Date;
  isFinished: boolean;
};

const Tasks = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

  const [taskName, setTaskName] = useState("");
  //aqui estou dizendo que ele vai criar uma lista de objetos.
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const newTask: Task = {
        name: taskName,
        createdAt: new Date(), // Captura a data atual quando a tarefa é criada
        isFinished: false,
      };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const clearTasks = () => {
    setTasks([]);
    setTaskName("");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TextInput onChangeText={setTaskName} value={taskName} />
      <Button title="+" onPress={addTask} />
      <Button title="Clear" onPress={clearTasks} />
     <FlatList
        data={tasks}
        renderItem={({ item }) => <Text onPress={()=> navigation.navigate('Details', { task: item })}>{"Nome da Tarefa: " + item.name}</Text>}
      />
    </View>
  );
};

export default Tasks;
