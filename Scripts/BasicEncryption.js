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
                    <Text style={styles.largeTitle}>Basic Encryption</Text>
                </View>
                <View style = {[styles.infoBox, {borderColor: 'transparent', maxWidth: '50%', margin: 'auto'} ]}>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Welcome to the first module of our lesson on the basics of encryption! First, we want to to start off with an activity on the most simple cipher, the Caesar cipher.</Text>
                    <Text style = {[styles.title, {marginTop:20}]}>Interactive Activity: Caesar Cipher</Text>
                    <Text style = {[styles.paragraph]}> </Text>
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
                        disabled={true}
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
                        onPress={() => setSection(1)}
                    />
                </View>
                
            </View>)}
            {section == 1 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.largeTitle}>Advanced Cryptography</Text>
                </View>
                <View style = {[styles.infoBox, {borderColor: 'transparent', maxWidth: '50%', margin: 'auto'} ]}>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Now that we have basic encryption under our belts, we can move on to the more complex types of encryption that are commonly used.</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}></Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left', marginTop:20}]}>The cipher we learned in the previous section did an adequate enough job in ensuring that at a first glance, people would not be able to understand its content. However, a simple caesar cipher is not enough protection for your messages. Our attackers are not people, but the computers that run billions of operations per second. The 26! permutations needed to test for a caesar cipher is trivial.</Text>
                    <Text style = {[styles.title, {textAlign: 'left', marginTop:20}]}>Symmetric Cryptography</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left', marginBottom:20}]}>Encrypting your message symmetrically can be one such way. Symmetric encryption will require a single key, a string of completely random letters and numbers that will be used as your cipher. This key will jumble your message in a way that can only be decrypted by the other person with the same key, thus symmetry. Already compared to the caesar cipher, depending on the length of your key, an attacker's bruteforce strategy may scare them off!</Text>
                    <Animated.Image source={require('../assets/infopng/symmetric.png')}
                                style={{
                                width:width/2,
                                height:(width/2)*(353/924)
                            }}
                    />
                    <Text style = {[styles.paragraph, {textAlign: 'left', marginTop:20}]}> It is incredibly efficient in transporting information around. However, note that by utilizing this symmetric cryptography, the security around those keys must be airtight! If that single key were to be exposed to an attacker from either party, any encrypted data they acquire will be easily decrypted.</Text>

                    <Text style ={[styles.title, {textAlign: 'left', marginTop:20}]}>Public-key Encryption</Text>
                    <Text style ={[styles.paragraph, {textAlign:'left', marginBottom:20}]}>Another alternative that you could try is public-key encryption. This version operates in a similar way, relying on keys as ciphers. However, in this case each person would need access to two keys, one private one for themselves (pk) and another that they share (sk). The public keys are used only to encrypt and are known by everyone. The private keys are then used to decrypt said messages.</Text>
                    <Animated.Image source={require('../assets/infopng/asymmetric.png')}
                                style={{
                                width:width/2,
                                height:(width/2)*(353/924)
                            }}
                    />
                    <Text style ={[styles.paragraph, {textAlign:'left', marginTop:20}]}>Above we can see that both parties need their own pair of private-public keys. Alice's message is encrypted with Bob's public key so that the only way it can be decrypted is if the other party knew of Bob's private key.</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}></Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Public-key encryption is certainly secure what with the deciphering tool being more obfuscated. One problem that you might find when implementing it is that it will be much more power and time consuming. With two keys being assigned to every person in the network, computational power and storage requirements will be important to focus on.</Text>
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
        {section == 2 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.largeTitle}>End of Encryption Module</Text>
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
                        onPress={() => setSection(1)}
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
                        disabled={true}
                    />
                </View>
            </View>)}
        </View>)}
    </View>)

}