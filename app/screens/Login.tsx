import {View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;


    const signIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        }catch(error: any){
            console.log(error);
            alert('Sign in failed: ' + error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
            <View style={styles.topPadding}>
            <TextInput
            value={email}
            style={styles.input}
            placeholder='Email' 
            autoCapitalize='none'
            onChangeText={
                (text) => setEmail(text)
                }>
                </TextInput>
                <TextInput
                value={password}
            style={styles.input}
            secureTextEntry={true}
            placeholder='password' 
            autoCapitalize='none'
            onChangeText={
                (text) => setPassword(text)
                }>
                </TextInput>
            </View>
            </KeyboardAvoidingView>
          
          {loading ? 
          <ActivityIndicator size="large" color="#0000ff"/>
          :
          <>
          <Button title='Login' onPress={()=> signIn()}/>
          <Button title='SignUp' onPress={()=> signUp()}/>
          </>

          }
        </View>
    );
};

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        fle: 1,
        justifyContent: 'center'
    },
    input:{
        marginVertical: 10,
        height: 50,
        borderWidth: 1, 
        borderRadius: 40,
        padding: 10,
        backgroundColor: '#fff'
    },
    topPadding:{
        paddingTop: 100
    }
});
