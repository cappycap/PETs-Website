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

export default function WebTracking(props) {

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
        } else {
            setMobile(false)
        }
    }, [width])

    const [section, setSection] = useState(0)

    return (<View style={styles.container}>
        {!loaded && (<View style={styles.loadingContainer}>
            <ActivityIndicatorView />
        </View>) ||
        (<View style={{flex:1}}>
        {siteEnabled && (<Animated.View style={[styles.mainContainer,{opacity:fadeAnim}]}>
            <Header mobile={mobile} page={0} />
            {section == 0 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.paragraph}>I am content!</Text>
                </View>
                <View style={styles.sectionNav}>
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'Go Back'}
                        icon={<Icon
                            name='chevron-back'
                            type='ionicon'
                            size={16}
                            color={'#ddd'}
                        />}
                        disabled={true}
                    />
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'Forward'}
                        icon={<Icon
                            name='chevron-forward'
                            type='ionicon'
                            size={16}
                            color={colors.mainTextColor}
                        />}
                        iconRight={true}
                        onPress={() => setSection(1)}
                    />
                </View>
            </View>)}
            {section == 1 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.paragraph}>I am content as well!</Text>
                </View>
                <View style={styles.sectionNav}>
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'Go Back'}
                        icon={<Icon
                            name='chevron-back'
                            type='ionicon'
                            size={16}
                            color={colors.mainTextColor}
                        />}
                        onPress={() => setSection(0)}
                    />
                    <Button 
                        buttonStyle={styles.navButton}
                        title={'Forward'}
                        icon={<Icon
                            name='chevron-forward'
                            type='ionicon'
                            size={16}
                            color={'#ddd'}
                        />}
                        iconRight={true}
                        disabled={true}
                    />
                </View>
            </View>)}
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