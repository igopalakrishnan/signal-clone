import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })

    }, [navigation])

    const register = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword( email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoUrl:
                imageUrl || 
                "https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
            })
        })
        .catch((error) => console.log(error.message));
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(text) => setName(text.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChange={(text) => setPassword(text.target.value)}
                />
                <Input
                    placeholder="Profile Picture URL (Optional)"
                    type="text"
                    value={imageUrl}
                    onChange={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
