import { StyleSheet, Text, View, Image } from "react-native"
import { Link } from 'expo-router'

{/* Comments */}
/* import Item from '../assets/img/img_name'                'Item' is an object (e.g. Logo, TabIcon, etc)*/


const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={{}} /> 
            <Text style={styles.title}>
                Flo-State
            </Text>
            
            <Text style={{ marginTop: 10, marginBottom: 30}}>
                Shower Optimizer App
            </Text>

            {/* An Example Card 
            <View style={styles.card}> 
                <Text>
                    Hello~! This is a card example!
                </Text>
            </View> */}
            


            {/* Links on Home Page */}
            <Link href="/startShower" style={styles.link} >Start Shower</Link>
            <Link href="/routines" style={styles.link}>Routines</Link>
            <Link href="/statistics" style={styles.link}>Statistics</Link>
            <Link href="/appSettings" style={styles.link}>Settings</Link>

            <Text style={styles.waterMark}> 
                pengwinomix.com
            </Text>
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(224, 242, 255, 1)'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 15
    },
    

    card: { /* for example only */
        backgroundColor: 'rgba(103, 206, 224, 1)',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(95, 149, 185, 1)'
    },
    
    
    link: {
        marginVertical: 20,
        fontSize: 15,
        color: 'grey',
        borderBottomWidth: 1,
        backgroundColor: 'rgba(103, 206, 224, 1)',
        padding: 10,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(95, 149, 185, 1)'
    },

    waterMark: {
    position: 'absolute',
    bottom: 45,
    right: 10,
    fontSize: 18,
    color: 'grey',
    opacity: 0.5,
  },
})
