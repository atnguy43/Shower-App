import { StyleSheet, Text, View} from 'react-native'
import { Link } from 'expo-router'


const appSettings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> 
                Settings
            </Text>


            <Link href="/" style={styles.link}>
                Back Home
            </Link> 
        </View>
    )
}

export default appSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(224, 242, 255, 1)'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1
    }
})