import React, {useState} from 'react'
import AppointmentCard from '../../../components/AppointmentCard'
import { FlatList,Text,Button } from 'react-native'
import { Container, List } from './styled'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const data = [
  {
    id: 1,
    data:'Segunda feira',
    hora:'10:00',
  },
  {
    id: 2,
    data:'Terça feira',
    hora:'11:00'
  }
]

const MakeAnAppointment = ({navigation}) => {
 
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const {id, nutricionist, address, photo} = navigation.state.params;
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    
    return (
        <Container>
            <Button onPress={showDatePicker} title='Show DatePicker'/>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}/>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={({item}) => {
                    return (
                        <AppointmentCard
                            dia={item.data}
                            nutricionist={nutricionist}
                            address={address}
                            photo={photo}
                            JSON={data}/>
                    )
                }}
                onEndReached={() => console.log('chegou no fim')}/>
        </Container>
    )
}

export default MakeAnAppointment
