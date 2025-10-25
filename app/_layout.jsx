import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'


const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="startShower" options={{ title: 'Routines' }} />
            <Stack.Screen name="routines" options={{ title: 'View Routines' }} />
            <Stack.Screen name="statistics" options={{ title: 'View Stats' }} />
            <Stack.Screen name="appSettings" options={{ title: 'Settings' }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})
