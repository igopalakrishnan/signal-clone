import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import { auth } from '../firebase'

const HomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#FFF" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity>
                        <Avatar rounded source={{
                            /* uri: auth?.currentUser?.photoURL */
                          uri:  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                        }} />
                    </TouchableOpacity>

                </View>
            )
        });
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
