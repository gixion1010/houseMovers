import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import welcomeLogo from '/Users/g/lectures/fyp/HouseMovers/HouseMovers/assets/logo.png'
import mainPic from '/Users/g/lectures/fyp/HouseMovers/HouseMovers/assets/mainpage.png'
import { button1 } from '../common/button'

const Login = () => {
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.logo} source={welcomeLogo} ></Image> 
            </View>
            <View style={styles.container2}>
                <Text style={styles.heading}>LOG IN</Text>

                {/* <Image style={styles.logo} source={mainPic} ></Image>  */}
            </View>
        </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // backgroundColor:'black',
        width: '100%',
        height: '100%',
    },
   
    container1: {
        // display: 'flex',
        alignItems: 'center',
        height: '30%',
        width: '100%',

    },
    container2: {
        // backgroundColor:'blue',
        display: 'flex',
       alignItems: 'center',
        height: '50%',
    },
    heading:{
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,

    },
    logo: {
        padding: 30,
        width: 250,
        height: 250,
    },
    
})