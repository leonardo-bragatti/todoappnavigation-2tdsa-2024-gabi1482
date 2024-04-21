import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

const Details = ({
    navigation,
    route,
  }: NativeStackScreenProps<RootStackParamList, 'Details'>) => {
    const { task } = route.params;
    return (
      <View>
        <Text>Nome Tarefa:{task.name}</Text>
        <Text>Data:{task.createdAt.toLocaleDateString()}</Text>
        <Text>Horário:{task.createdAt.toLocaleTimeString()}</Text>
        <Text>Finalizada:{task.isFinished ? "Terminada" : "Não Terminada"}</Text>
      </View>
    );
  };
  
  export default Details;
  