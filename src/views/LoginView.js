import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
  }

  getLogin = () => {
    let errors = [];

    if (!this.state.username) {
      errors.push('Username can not be empty');
    }

    if (!this.state.email) {
      errors.push('Email can not be empty');
    } else if (!this.validateEmail(this.state.email)) {
      errors.push('Email syntax is not correct');
    }

    if (errors.length) {
      Alert.alert('Invalid login', errors.join('\n'));
    } else {
      Actions.home();
    };
  };

  validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>
            Welcome
          </Text>
        </View>
        <TextInput
          placeholder='Username'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          style={styles.input}
        />
        <TextInput
          placeholder='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          style={styles.input}
        />
        <Button
          onPress={this.getLogin}
          title='Login'
          color='#841584'
          accesibilityLabel='Login button'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '80%',
    maxWidth: 700,
    marginBottom: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DDD',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    width: '80%',
    maxWidth: 700,
    height: 100,
    marginBottom: 48
  },
  text: {
    color: '#DDD',
    fontSize: 24,
    fontWeight: '700'
  }
});