import { StyleSheet, useColorScheme, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from "../constants/Colors"


const RootLayout = () => { 
    const colorScheme = useColorScheme()
    // Used for debugging Color Schemes 
    // console.log(colorScheme)  

    // defaults to light theme if colorScheme is null
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="startShower" options={{ title: 'Routines' }} />
            <Stack.Screen name="routines" options={{ title: 'View Routines' }} />
            <Stack.Screen name="statistics" options={{ title: 'View Stats' }} />
            <Stack.Screen name="appSettings" options={{ title: 'Settings', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})
