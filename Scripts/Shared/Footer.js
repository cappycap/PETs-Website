import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Icon } from 'react-native-elements'
import { footer, footerMobile, colors } from '../Styles.js'

export default function Footer(props) {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(footer)
    
    useEffect(() => {
        if (props.width <= props.widthLimit) {
            setStyles(footerMobile)
        } else {
            setStyles(footer)
        }
    }, [])

    return (<View>
        <View style={styles.footer}>
            <View>
                <Text style={styles.pText}>Interested in working together?</Text>
                <TouchableOpacity onPress={() => linkTo('/contact')}>
                    <Text style={[styles.pText,styles.link]}>Contact me!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerSection}>
                <Text style={[styles.pText,{textAlign:'right'}]}>&copy; Adam Bullard {new Date().getFullYear()}</Text>
            </View>
        </View>
    </View>)

}