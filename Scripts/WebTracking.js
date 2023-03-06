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
                    <Text style={styles.largeTitle}>How Tracking Happens</Text>
                </View>
                <View style={[styles.sectionContent,{margin:20}]}>
                    <Text style={styles.paragraph}>When viewing a website, you allow that website to learn information about you and your computer.</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={styles.paragraph}>The browser you are currently using is simply software on your computer. This software communicates over the internet with a range of servers, who pass on or deliver data to create the web experience you know.</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',margin:20}}>
                    <Animated.Image source={require('../assets/infopng/webtracking1.jpeg')}
                                    style={{
                                        width:width/2,
                                        height:(width/2)*(209/650)
                                    }}
                    />
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>When your browser requests a web page to load, that web page can return information called cookies, which your browser will hold onto after you have left that site.</Text>
                </View>
                
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>This cookie will sit within your browser, and can be read by the same or other websites you visit.</Text>
                </View>

                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>While the image above shows only one server exchange, this one has two to demonstrate this tracking method. In this case, the cookie may contain any identifying information:</Text>
                </View>

                <View style={{justifyContent:'center',alignItems:'center',margin:20}}>
                    <Animated.Image source={require('../assets/infopng/webtracking2.png')}
                                    style={{
                                        width:width/2,
                                        height:(width/2)*(856/1200)
                                    }}
                    />
                </View>

                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>While this shows off what an interaction with one site looks like, remember that your cookies simply sit on your hard drive. Almost any site can read them! This is the most common purpose of cookies: advertisers use them to track your interests and actions across the Internet!</Text>
                </View>

                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>In our next lesson, we will discuss what can be seen and tracked in cookies. Then finally, we will learn how to protect against this tracking.</Text>
                </View>
                
            </View>)}
            {section == 1 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.largeTitle}>What Can Be Seen</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>Understanding what trackers are interested in is crucial to protecting yourself.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>Here is a demonstration of everything we can pull from your device (with your permission!)</Text>
                </View>
                <View style={[styles.sectionContent,{margin:50,alignItems:'center'}]}>
                    <Text style={styles.paragraph}>interactive content here later!</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>Here is what is commonly tracked online:</Text>
                </View>
                <View style={[styles.sectionContent,{margin:50,alignItems:'center'}]}>
                    <Text style={styles.paragraph}>image list here!</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>It can be scary to think all of this data is accessible, but luckily we have tools to protect us...</Text>
                </View>
            </View>)}
            {section == 2 && (<View style={styles.section}>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.largeTitle}>How to Protect Yourself</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>There are several ways you can protect yourself online.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Virtual Private Networks (VPNs)</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>The first are VPNs, which help protect your online activity from being traced back to you.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>They do this by acting as a buffer between your device and the internet:</Text>
                </View>
                <View style={[styles.sectionContent,{margin:50,alignItems:'center'}]}>
                    <Text style={styles.paragraph}>VPN image explanation here</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>These VPNs are widely accessible online for free, trial periods, and purchase. We recommend OpenVPN or NordVPN for easy to use and affordable solutions.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Ad Blockers</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>You can also protect yourself by installing an ad blocker. These browser extensions will eliminate ads across websites, preventing them from tracking you and cleaning up your web experience.</Text>
                </View>
                <View style={[styles.sectionContent,{margin:50,alignItems:'center'}]}>
                    <Text style={styles.paragraph}>image of how ad blockers replace JavaScript code here</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>They do this by lifting out specific pieces of code in a webpage identified as an advertisement, preventing the ad's code from tracking you and you from seeing the ad itself.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>At the end of the day, it's important to remember how to protect yourself online and be knowledgable of how the world of online privacy is growing and evolving.</Text>
                </View>
            </View>)}
            <View style={[styles.sectionNav,{margin:20}]}>
                <Button 
                    buttonStyle={styles.navButton}
                    title={'Go Back'}
                    icon={<Icon
                        name='chevron-back'
                        type='ionicon'
                        size={16}
                        color={'#99a1a8'}
                        style={{marginTop:2}}
                    />}
                    disabled={(section == 0) ? true : false}
                    onPress={(section == 0) ? () => {} : () => setSection(section-1)}
                />
                <Button 
                    buttonStyle={styles.navButton}
                    title={'Forward'}
                    icon={<Icon
                        name='chevron-forward'
                        type='ionicon'
                        size={16}
                        color={colors.mainTextColor}
                        style={{marginTop:2}}
                    />}
                    iconRight={true}
                    disabled={(section == 2) ? true : false}
                    onPress={(section == 2) ? () => {} : () => setSection(section+1)}
                />
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