import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { colors, main } from './Styles.js'
import { useFonts } from 'expo-font'
import { Button, Icon } from 'react-native-elements'
import ActivityIndicatorView from './Shared/ActivityIndicatorView.js'
import useWindowDimensions from './Shared/useWindowDimensions.js'
import Header from './Shared/Header.js'

export default function Home(props) {

    // Nav.
    var linkTo = useLinkTo()

    // Styling variables.
    var [styles, setStyles] = useState(main)
    var { height, width } = useWindowDimensions()

    // Admin control variables.
    const siteEnabled = true

    // Page control variables.
    const [loaded, setLoaded] = useState(false)
    const [mobile, setMobile] = useState(false)

    // Animation variables.
    const [fadeAnim] = useState(new Animated.Value(0))
    
    // Animation functions.
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
        }).start()
    }

    // Main starter function.
    useEffect(() => {
        console.log('mainprops:',props)
        if (!loaded) {
            setTimeout(() => {
                setLoaded(true)
                fadeIn()
            }, 700)
        }
        if (width < 950) {
            console.log('width change')
            setMobile(true)
            styles.paragraph = {
                fontFamily:'Poppins',
                fontSize:18,
                textAlign:'center',
                color:colors.mainTextColor,
                flexWrap:'wrap'
            }
            styles.row = {
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }
        } else {
            setMobile(false)
        }
    }, [width])

    return (<View style={[styles.container,{flex:1}]}>
        {!loaded && (<View style={styles.loadingContainer}>
            <ActivityIndicatorView />
        </View>) ||
        (<View style={{flex:1}}>
        {siteEnabled && (<Animated.View style={[styles.loadingContainer,{opacity:fadeAnim}]}>
            <Animated.Image 
                source={require('../assets/icons/main.png')}
                style={[styles.logo]}
            /> 
            <Text style={styles.largeTitle}>Privacy Enhancing Techniques</Text>
            <Text style={[styles.paragraph,{marginTop:10}]}>Your personal data is valuable. It's important you understand your data and the basics of privacy and encryption.</Text>
            <Text style={styles.paragraph}>Complete the three experiences below to begin your journey:</Text>
            <View style={[styles.row,{marginTop:30}]}>
                <View style={[styles.infoBox]}>
                    <Text style={styles.title}>Web Tracking</Text>
                    <Text style={styles.paragraph}>Learn how your data is tracked and used online.</Text>
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'View Lesson'}
                        onPress={() => linkTo('/web-tracking')}
                    />
                </View>
                <View style={mobile ? [styles.infoBox,{marginTop:20,marginBottom:20}] : [styles.infoBox,{marginLeft:20,marginRight:20}]}>
                    <Text style={styles.title}>Encryption Basics</Text>
                    <Text style={styles.paragraph}>Learn the essentials to how data is kept secret.</Text>
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'View Lesson'}
                        onPress={() => linkTo('/encryption-basics')}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.title}>Anonymity</Text>
                    <Text style={styles.paragraph}>Learn about what anonymity is and how it works.</Text>
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'View Lesson'}
                        onPress={() => linkTo('/anonymity')}
                    />
                </View>
            </View>
        </Animated.View>) || (<View style={styles.construction}>
            <Icon
                name='construct'
                type='ionicon'
                size={40}
                color={colors.mainTextColor}
            />
            <Text style={[styles.bodyText,{fontSize:12}]}>Site under construction! Check back soon.</Text>
        </View>)}
        </View>)}
    </View>)

}