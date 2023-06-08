import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import {useState} from 'react';

const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [inputs, setInputs] = useState({
    email: 'Email address',
    phone: 'Phone number',
  });

  const handleChange = (name, event) => {
    const inputName = name;
    const input = event.target.input;
    setInputs(inputs => ({...inputs, [inputName]: input}));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./public/images/logo.png')}></Image>
          <Text style={styles.title}> My Timer</Text>
        </View>
        <View style={styles.loginView}>
          <Text style={styles.text}>
            To log into TimerApp please input rour email and phone number
          </Text>
          <TextInput
            style={styles.input}
            input={inputs.email}
            keyboardType="email-address"
            onChange={e => handleChange('email', e)}>
            {inputs['email']}
          </TextInput>
          <TextInput
            style={styles.input}
            input={inputs.phone}
            keyboardType="number-pad"
            onChange={e => handleChange('phone', e)}>
            {inputs['phone']}
          </TextInput>
        </View>
        <View style={styles.bottomView}>
          <View>
            <Text style={styles.bottomText}>Need Help?</Text>
            <Text style={styles.bottomSupport}>Contact support </Text>
          </View>
          <Pressable style={styles.button}>
            <Image
              style={styles.arrow}
              source={require('./public/images/login-button-arrow.png')}></Image>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: windowHeight * 0.1,
    paddingTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    top: 30,
    left: 30,
    width: 30,
    height: 30,
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    fontWeight: '900',
  },
  loginView: {
    height: windowHeight * 0.4,
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    margin: 12,
    fontSize: 18,
    color: 'gray',
  },
  input: {
    margin: 10,
    padding: 10,
    height: 50,
    color: 'gray',
    borderWidth: 1,
    borderColor: 'gray',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: windowHeight * 0.5,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#A020F0',
  },
  arrow: {
    height: 30,
    width: 30,
    transform: [{rotate: '180deg'}],
  },
  bottomText: {
    fontSize: 14,
    color: 'gray',
  },
  bottomSupport: {
    fontSize: 14,
    color: '#63C5DA',
  },
});
