import * as React from 'react';
import { Button,View, Text,Image,StyleSheet,TextInput,useState, ShadowPropTypesIOS} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={styles.text}>Ballroomdance</Text>
     <View style={{paddingBottom:10, width: null,height: null,  }}> 
          <Image resizeMode="cover" source={require('./source/images.jpg')}  />
     </View>
      <View style={styles.button}>
      <Button color='#00A1E4'
      title="About us"
      onPress={() => navigation.navigate("About Dancing")}
      />
      <Button color='#00A1E4'
        title="Contact Us"
        onPress={() => navigation.navigate("ContactUs")}
      />
      <Button color='#00A1E4'
      title="Pictures"
      onPress={() => navigation.navigate("Pictures")}
      />
     </View>
    </View>

  );
}


function AboutDancing({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <Text style={styles.text2}>Ballroom dance is a set of partner dances, which</Text>
      <Text style={styles.text2}>  are enjoyed both socially and competitively around the world, mostly because of its performance and </Text>
      <Text style={styles.text2}> entertainment aspects. Ballroom dancing is also widely enjoyed on stage, film, and television.</Text>
      <View style={styles.picture}>

        <Image source={require('./source/tanc5.jpg')}/>

       
      </View>
      <View style={styles.button}>
      <Button color='#00A1E4'
        title="back"
        onPress={() => navigation.navigate("Home")}
      />
     </View>
    </View>

  );
}


function ContactUs({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Text tstyle={styles.text}>Send an email to ****** dance</Text>
      <Text tstyle={styles.text}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="numeric"
      />
      <View style={styles.button}>
      <Button color='#00A1E4'
        title="Send"
      />
      <View style={styles.button}>
      <Button color='#00A1E4'
        title="back"
        onPress={() => navigation.navigate("Home")}
      />
     </View>
    </View>
</View>
  );
}


function Pictures({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>_________________ </Text>
      <Text style={styles.text}>Ballroomdance</Text>
      <View style={styles.image}>
           <Image source={require('./source/tanc4.jpg')}  />
    
      </View>
      <View>
           <Image source={require('./source/tanc3.jpg')}  />
    
      </View>
      <View style={styles.button}>
      <Button color='#00A1E4'
        title="back"
        onPress={() => navigation.navigate("Home")}
      />
     </View>
    </View>

  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About Dancing" component={AboutDancing} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Pictures" component={Pictures} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({

    text:{
      fontSize: 26,
      color:'darkblue',
      paddingBottom: 30,
      fontWeight: 'bold',

    },
    text2:{
      fontSize: 15,
      color:'black',
      paddingBottom: 10,
      justifyContent: 'center'
    },
    picture:{
      justifycontent:'center'
    },
    button:{
      width: '100%',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center'

    },
    input:{
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
     borderColor: '#00A1E4'
    },
    image:{
     paddingBottom:30
    },

  })


export default App;