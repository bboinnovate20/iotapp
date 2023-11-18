import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Divider, Switch, Button, Modal, Portal, PaperProvider, TextInput } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Chip } from 'react-native-paper';

import { activateDevice, connectDevice } from './businessLogic';

const {Header, Content} = Appbar;

export default function App() {

  const [state, setState] = useState(false);
  const [activating, setActivating] = useState(false);
  const [isConnected, setConnection] = useState(false);

  const [id, setID] = useState("");
  const [key, setKey] = useState("");


  const [visible, setVisible] = useState(false);


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onChangeID = (id) => setID(id);
  const onChangeKey = (key) => setKey(key);
  
  const onSubmit = async () => {
    const activate = activateDevice(id, key);

    setTimeout(()=> {
      setActivating(true);
      hideModal();
      setConnection(true);
    }, 1000)
  }

  const connect = () => {

  }

  return (
    <SafeAreaProvider>
      <PaperProvider >
        <Header style={{backgroundColor: "#ffebcd"}}>
          <Content title="IOT App" style={{fontWeight: 'bold'}}/>
        </Header>
    

      <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
      {/* {
        !isConnected && */}
          <Button mode="contained" disabled={activating} onPress={() => showModal()}>
            {isConnected ? "Activated" : "Activate" }
          </Button>
      {/* } */}
      <View style={{marginTop: 20}}>
        <Text style={{paddingVertical: 10, textAlign: 'center'}}>Connected to WiFi</Text>
        <Chip icon="check" onPress={() => console.log('Pressed')}>
          {isConnected ? "Connected" : "Not Connected"}  
        </Chip>
      
      </View>
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor: "white", padding: 20, margin: 20, borderRadius: 10}}>
              <TextInput
                  label="Your ID"
                  value={id}
                  onChangeText={(value) => onChangeID(value) }
                  right={<TextInput.Icon icon="lock" />}
                />
                <TextInput
                  label="Your Key"
                  value={key}
                  onChangeText={(value) => onChangeKey(value) }
                  right={<TextInput.Icon icon="lock" />}
                />
                <Button mode="contained" disabled={activating} onPress={() => onSubmit()} style={{marginTop: 10}}>
                  {!activating ? "Activate Device": "Activating"} 
                </Button>
              </Modal>
            </Portal>
                  <Text>IOT Switch App</Text>
                  <Divider style={{height:10}}/>
                <View style={{transform: [{scale: 2}], marginTop:60, alignItems: 'center', justifyContent: 'center'}}>
                  <Switch value={state} onValueChange={() => {setState(!state)}}/>
                  <Text style={{transform: [{scale: 0.7}]}}>Emmanuel </Text>
                </View>
      </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
