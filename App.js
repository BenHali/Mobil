import * as React from 'react';
import { Button,View, Text,Image,StyleSheet,TextInput,useState, ShadowPropTypesIOS} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text tstyle={styles.text}>Ballroomdance</Text>
     <View style={{paddingBottom:100, width: null,height: null,  }}> 
          <Image resizeMode="cover" source={require('./source/images.jpg')}  />
     </View>
      <View style={styles.button}>
      <Button color='#00A1E4'
      title="About us"
      onPress={() => navigation.navigate("About Us")}
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
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left'}}>
      <Text tstyle={styles.text}>Ballroom dance is a set of partner dances, which are enjoyed both socially and competitively around the world, mostly because of its performance and entertainment aspects. Ballroom dancing is also widely enjoyed on stage, film, and television.

Ballroom dance may refer, at its widest definition, to almost any recreational dance with a partner. However, with the emergence of dance competition (now known as Dancesport), two principal schools have emerged and the term is used more narrowly to refer to the dances recognized by those schools.

The International School, originally developed in England[1] and now regulated by the World Dance Council (WDC) and the World DanceSport Federation (WDSF), is most prevalent in Europe. It encompasses two categories, Standard and Latin, each of which consist of five dances—International Waltz, International Tango, International Viennese Waltz, International Slow Foxtrot, and International Quickstep in the Standard category and International Samba, International Cha Cha, International Rumba, International Paso Doble, and International Jive in the Latin category. A "Standard" or "Latin" competition encompasses all five dances in the respective category, and a "Ten Dance" competition encompasses all ten dances. The two styles, while differing in technique, rhythm, and costumes, exemplify core elements of ballroom dancing such as control and cohesiveness.
The American School, also called North American School, is most prevalent in the United States and Canada, where it's regulated by USA Dance and Canada Dancesport (CDS) -- the respective national member bodies of the WDSF. It also consists of two categories analogous to the Standard and Latin categories of the International School, respectively called Smooth and Rhythm. The Smooth category consists of only four dances—American Waltz, American Tango, American Foxtrot, and American Viennese Waltz, omitting American Peabody (the American School equivalent to Quickstep) -- while the dances selected for competition in the Rhythm category are American Cha Cha, American Rumba, American East Coast Swing (the American School equivalent to International Jive), American Bolero, and American Mambo.[2][3] A "Smooth" or "Rhythm" competition encompasses the dances in the respective category, and a "Nine Dance" competition encompassing all nine of these dances is analogous to the "Ten Dance" competition of the International School. USA Dance additionally recognizes American Peabody, American Merengue, American Paso Doble, American Samba, American West Coast Swing, American Polka, and American Hustle as ballroom dances in which sanctioned competition may take place.
</Text>
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
    <View style={{ flex: 1, alignItems: 'left'}}>
      <Text tstyle={styles.text}>Telefonszám:+3630 </Text>
      <Text tstyle={styles.text}>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <View style={styles.button}>
      <Button color='#00A1E4'
        title="submit"
      />
      <View style={styles.button}>
      <Button color='#00A1E4'
        title="back"
        onPress={() => navigation.navigate("Home")}
      />
     </View>
    </View>

  );
}


function Pictures({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text tstyle={styles.text}>_________________ </Text>
      <Text style={styles.text}>Ballroomdance</Text>
      <View>
           <Image source={require('./source/tanc1.jpg')}  />
           <Image source={require('./source/tanc2.jpg')}  />
            <Image source={require('./source/tanc3.jpg')}  />
            <Image source={require('./source/tanc4.jpg')}  />
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
      color:'#423e3e',
      paddingBottom: 70,
      fontWeight: 'bold',

    },
    button:{
    marginTop:20,
    paddingTop:20,
    paddingBottom:20,
    width: 200

    },
    input:{
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
     borderColor: '#00A1E4'
    }

})


export default App;