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
        (<View style={{}}>
        {siteEnabled && (<Animated.View style={[styles.mainContainer,{opacity:fadeAnim}]}>
            <Header mobile={mobile} page={0} />
            {section == 0 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.largeTitle}>Basic Mixnets</Text>
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
                <View style = {[styles.infoBox, {borderColor: 'transparent', maxWidth: '50%', margin: 'auto'} ]}>
                    <Text style = {[styles.title, {textAlign: 'left'}]}>What are mixnets?</Text>  
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Mixnets are applications that can obscure the directions that an input takes to get to its output.</Text>

                    <Animated.Image source={require('../assets/infopng/mixnet.png')}
                                    style={{
                                        width:width/2,
                                        height:(width/2)*(210/870)
                                    }}
                    />

                    <Text style = {[styles.title, {textAlign: 'left', marginTop: 20}]}>How do they work?</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>First, mixnets require a network of "senders" and "receivers." This is a critical first step.</Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent', textAlign: 'center'}]}>
                        <Text style = {[styles.paragraph]}>image of senders </Text>
                        <Text style = {[styles.paragraph]}>image of receivers </Text>
                    </View>

                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Next, the receivers must then encrypt their public-key onto their message so that the mixers can determine who their respective sender is.</Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent', textAlign: 'center'}]}>
                        <Text style = {[styles.paragraph]}>image of senders encrypting their messages with their pk</Text>
                    </View>

                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Before sending their message to the mixers, the receiver must encrypt their message once again, as determined by the mixers. </Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent', textAlign: 'center'}]}>
                        <Text style = {[styles.paragraph]}>image of senders encrypting their messages with mixer pk</Text>
                    </View>

                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Once the message has been successfully encrypted it will go through mixers until the message has been decrypted to the original message and its public key, </Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent', textAlign: 'center'}]}>
                        <Text style = {[styles.paragraph]}>image of receivers getting the message sent with a shared public key</Text>
                    </View>

                    
                    <Text style = {[styles.title, {textAlign: 'left', marginTop: 20}]}>What do they do?</Text>  
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Mixnets are applications that can obscure the directions that an input takes to get to its output.</Text>
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