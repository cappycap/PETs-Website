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
import axios from 'axios'

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

    const [userData, setUserData] = useState(null)
    const [infoLoading, setInfoLoading] = useState(false)

    const getUserData = async () => {

        setInfoLoading(true)

        var info = {
            timeOpened:new Date(),
            timezone:(new Date()).getTimezoneOffset()/60,
            windowWidth:width,
            windowHeight:height,
            screenWidth:window.screen.width,
            screenHeight:window.screen.height
        }

        if (window != undefined && window.location != undefined) {
            info.pathname = window.location.pathname
        }

        if (history != undefined) {
            info.previousSites = history
        }

        if (document != undefined) {
            info.referrer = document.referrer
        }

        if (navigator != undefined) {
            info.plugins = []
            for (var i = 0; i < navigator.plugins.length; i++) {
                if (navigator.plugins[i].name != undefined) {
                    info.plugins.push(navigator.plugins[i].name)
                }
            }
            info.browserEngine = navigator.product
            info.browserVersionA = navigator.appVersion
            info.browserVersionB = navigator.userAgent
            info.language = navigator.language
            info.platform = navigator.platform
            info.cookiesEnabled = navigator.cookieEnabled
        }

        if (localStorage != undefined) {
            info.localStorage = localStorage
        }

        /*if (position != undefined && position.coords != undefined) {
            info.latitude = position.coords.latitude
            info.longitude = position.coords.longitude
            info.accuracy = position.coords.accuracy
            info.altitude = position.coords.altitude
            info.altitudeAccuracy = position.coords.altitudeAccuracy
            info.heading = position.coords.heading
            info.speed = position.coords.speed
            info.timestamp = position.timestamp
        }*/

        try {
            const res = await axios.get('https://geolocation-db.com/json/')
            info.ip = res.data.IPv4
        } catch (e) {
            console.log(e)
        }

        console.log('user info')
        console.log(info)

        setUserData(info)
        setInfoLoading(false)

    }

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
                {!infoLoading && (<View style={styles.webTrackingInteractiveContainer}>
                    {userData == null && (<Button 
                        buttonStyle={[styles.navButton,{width:width/2}]}
                        title={'Find Data'}
                        onPress={() => getUserData()}
                    />) || (<View style={styles.infoBox}>
                        <Text style={styles.title}>JavaScript Information Readout</Text>
                        {userData.ip != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>IP Address:</Text> {userData.ip}
                        </Text>)}
                        {userData.pathname != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>URL Path:</Text> {userData.pathname}
                        </Text>)}
                        {userData.timeOpened != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Time Opened:</Text> {userData.timeOpened.toString()}
                        </Text>)}
                        {userData.timezone != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Time Zone:</Text> {userData.timezone}
                        </Text>)}
                        {(height != undefined && width != undefined) && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Window Size:</Text> {width} x {height}
                        </Text>)}
                        {(userData.screenWidth != undefined && userData.screenHeight != undefined) && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Screen Size:</Text> {userData.screenWidth} x {userData.screenHeight}
                        </Text>)}
                        {userData.referrer != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Referrer:</Text> {userData.referrer}
                        </Text>)}
                        {userData.browserEngine != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Browser Engine:</Text> {userData.browserEngine}
                        </Text>)}
                        {userData.browserVersionA != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Browser Info 1:</Text> {userData.browserVersionA}
                        </Text>)}
                        {userData.browserVersionB != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Browser Info 2:</Text> {userData.browserVersionB}
                        </Text>)}
                        {userData.plugins != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Browser Plugins:</Text> {userData.plugins.join(",")}
                        </Text>)}
                        {userData.language != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Language:</Text> {userData.language}
                        </Text>)}
                        {userData.platform != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Platform:</Text> {userData.platform}
                        </Text>)}
                        {userData.cookieEnabled != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Cookies Enabled:</Text> {userData.cookieEnabled}
                        </Text>)}
                        {userData.localStorage != undefined && (<Text style={styles.paragraph}>
                            <Text style={{fontFamily:'PoppinsSemiBold'}}>Local Storage</Text> {JSON.stringify(userData.localStorage)}
                        </Text>)}
                    </View>)}
                </View>) || (<View style={styles.webTrackingInteractiveContainer}>
                    <ActivityIndicatorView />
                </View>)}
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>What we can grab above using JavaScript on our relatively simple website is just the beginning of information available to track online.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>Here is what is commonly tracked online, using a combination of information grabbed from users combined with cookies and cross-site tracking:</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>IP Address</Text>
                    <Text style={styles.paragraph}>This is a unique number assigned to your device by your internet service provider (ISP) that can be used to track your location and browsing activity. Source: <TouchableOpacity onPress={() => window.open('https://privacy.net/ip-address/', '_blank')}><Text style={styles.link}>Privacy.net</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Device Information</Text>
                    <Text style={styles.paragraph}>Using methods similar to our own site, advertisers can collect information about your device, such as the operating system, browser type, and screen resolution, to optimize their content and target ads. Source: <TouchableOpacity onPress={() => window.open('https://policies.google.com/technologies/device-information', '_blank')}><Text style={styles.link}>Google</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Demographic Information</Text>
                    <Text style={styles.paragraph}>Websites and advertisers can collect information you submit about your age, gender, income, and other demographic data to target ads and personalize content. Source: <TouchableOpacity onPress={() => window.open('https://www.nielsen.com/us/en/solutions/capabilities/consumer-insights-behavioral-measurement/', '_blank')}><Text style={styles.link}>Nielsen</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Web Beacons</Text>
                    <Text style={styles.paragraph}>Also known as tracking pixels or clear gifs, these are small image files that are embedded in websites or emails to track user behavior. Often used in conjunction with cookies. Source: <TouchableOpacity onPress={() => window.open('https://www.eff.org/issues/online-tracking', '_blank')}><Text style={styles.link}>Electronic Frontier Foundation</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Geolocation</Text>
                    <Text style={styles.paragraph}>Websites can use your IP address or GPS data to determine your location, which can be used to deliver targeted content and ads. Source: <TouchableOpacity onPress={() => window.open('https://www.kaspersky.com/resource-center/definitions/geolocation', '_blank')}><Text style={styles.link}>Kaspersky</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Search Queries</Text>
                    <Text style={styles.paragraph}>Search engines like Google can track your search history to deliver personalized results and ads. Source: <TouchableOpacity onPress={() => window.open('https://policies.google.com/technologies/ads', '_blank')}><Text style={styles.link}>Google</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Social Media Activity</Text>
                    <Text style={styles.paragraph}>Websites and advertisers can track your social media activity, such as likes, shares, and comments across sites using cookies to target ads and create user profiles. Source: <TouchableOpacity onPress={() => window.open('https://www.eff.org/issues/social-networks', '_blank')}><Text style={styles.link}>Electronic Frontier Foundation</Text></TouchableOpacity></Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:50}]}>
                    <Text style={styles.largeTitle}>The Takeaway</Text>
                    <Text style={styles.paragraph}>Keep in mind, whether this data is collected and how it is handled varies widely around the world based on privacy laws and jurisdiction. It can be scary to think all of this data is accessible, but luckily we have tools to protect us...</Text>
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
                <View style={{justifyContent:'center',alignItems:'center',margin:20}}>
                    <Animated.Image source={require('../assets/infopng/webtracking3.jpeg')}
                        style={{
                            width:width/2,
                            height:(width/2)*(446/800)
                        }}
                    />
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>Actions you wish to take online are passed to your ISP, who sends that info to the VPN. The VPN performs this action on your behalf and reports the result to you. The internet only sees the VPN, protecting your identity!</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>These VPNs are widely accessible online for free, trial periods, and purchase. We recommend <TouchableOpacity onPress={() => window.open('https://nordvpn.com/vpn-site/', '_blank')}><Text style={styles.link}>NordVPN</Text></TouchableOpacity> for an easy to use and affordable solution. It should be noted that both your ISP and the VPN itself are capable of tracking you as well. That's why it's important to use a trustworthy VPN and ISP.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.title}>Ad Blockers</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>You can also protect yourself by installing an ad blocker. These browser extensions will eliminate ads across websites, preventing them from tracking you and cleaning up your web experience.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>Ad blockers do this by lifting out specific pieces of code in a webpage identified as an advertisement using a set of known advertiser filterlists, preventing the ad's code from tracking you and you from seeing the ad itself.</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',margin:20}}>
                    <Animated.Image source={require('../assets/infopng/webtracking4.png')}
                        style={{
                            width:width/2,
                            height:(width/2)*(696/1200)
                        }}
                    />
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>There are a multitude of effective ad blockers for almost every browser. Head to your browser's extension store and search for ad blockers to find one for your browser.</Text>
                </View>
                <View style={[styles.sectionContent,{marginTop:20}]}>
                    <Text style={styles.paragraph}>One we recommend available on almost all browsers is <TouchableOpacity onPress={() => window.open('https://ublockorigin.com/', '_blank')}><Text style={styles.link}>uBlock Origin</Text></TouchableOpacity>. This ad blocker is free, open sourcce, and effective at its job. What more could you ask for?</Text>
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
                        color={(section == 0) ? '#99a1a8' : colors.mainTextColor }
                        style={{marginTop:2}}
                    />}
                    disabled={(section == 0) ? true : false}
                    onPress={(section == 0) ? () => {} : () => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        setSection(section-1)
                    }
                    }
                />
                <Button 
                    buttonStyle={styles.navButton}
                    title={section == 2 ? 'Move on to Anonymity!' : 'Forward'}
                    icon={<Icon
                        name='chevron-forward'
                        type='ionicon'
                        size={16}
                        color={ colors.mainTextColor }
                        style={{marginTop:2}}
                    />}
                    iconRight={true}
                    onPress={(section == 2) ? () => linkTo('/anonymity') : () => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        setSection(section+1)
                    }}
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