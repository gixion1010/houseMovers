import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import welcomeLogo from '/Users/g/lectures/fyp/HouseMovers/HouseMovers/assets/logo.png'
import mainPic from '/Users/g/lectures/fyp/HouseMovers/HouseMovers/assets/mainpage.png'
import { button1 } from '../common/button'



const Welcome = () => {
  return (
    <>
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.logo} source={welcomeLogo} ></Image>
                <Image style={styles.mainPic} source={mainPic} ></Image>
                <Text style={button1}>LOGIN FOR USER</Text>
                <Text style={button1}>SIGN UP FOR USER</Text>

            </View>
        </View>
    </>

)
}




const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
   
    container1: {
        display: 'flex',
        alignItems: 'center',

    },
    logo: {
        padding: 30,
        width: 250,
        height: 250,
    },
    mainPic: {
        padding: 30,
        width: '100%',
        resizeMode: 'contain',
        height: 400,
    },
})


export default Welcome


