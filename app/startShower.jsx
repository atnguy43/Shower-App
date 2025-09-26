import { StyleSheet, Text, View} from 'react-native'
import { Link } from 'expo-router'


const startShower = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> 
                Start Shower
            </Text>


            <Link href="/" style={styles.link, styles.backButton}>
                Back Home
            </Link> 

            

        </View>
    )
}

export default startShower

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
    },
    backButton: {
        alignItems: 'start',
        textAlign: 'left',
        justifyContent: 'top'
    },


})