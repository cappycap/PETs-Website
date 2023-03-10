import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, StyleSheet, Text, View, TextInput } from 'react-native';
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

    // Caesar
    const [plaintext, setPlaintext] = useState('')
    const [shift, setShift] = useState(3)
    const [shiftText, setShiftText] = useState('3')
    const [encoded, setEncoded] = useState([])
    const [encodedText, setEncodedText] = useState('')

    const encodeCaesar = (text, shiftOverride=null) => {

        var actualShift = (shiftOverride == null) ? shift : shiftOverride
        var newEncoded = []
        var newEncodedText = ''

        for (var i = 0; i < text.length; i++) {

            if (i < 15 && shift != null) {

                var char = text[i].toUpperCase()
                if (char != ' ') {
                    var charOld = char
                    char = char.charCodeAt(0)
                    if (char - actualShift < 65) {
                        // We need to wrap back around and not decrement out of A-Z charspace.
                        char = 91 + (char-65)
                    }
                    var shiftedChar = String.fromCharCode(char - actualShift);
                    newEncodedText = newEncodedText + shiftedChar

                    newEncoded.push([charOld, shiftedChar])
                }
                
            } else {
                break
            }

        }

        setPlaintext(text)
        setEncoded(newEncoded)
        setEncodedText(newEncodedText)

    }

    const applyShift = (text) => {

        if (text.length < 2) {

            setShiftText(text)
        
            if (!isNaN(text)) {
                var num = Number(text)
                setShift(num)
                encodeCaesar(plaintext, num)
            } else {
                setShift(null)
            }

            

        }

    }

    return (<View style={styles.container}>
        {!loaded && (<View style={styles.loadingContainer}>
            <ActivityIndicatorView />
        </View>) ||
        (<View style={{flex:1}}>
        {siteEnabled && (<Animated.View style={[styles.mainContainer,{opacity:fadeAnim}]}>
            <Header mobile={mobile} page={2} />
            {section == 0 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.largeTitle}>Basic Encryption</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Welcome to our module on the basics of encryption! First, we want to to start off with an activity on the most simple cipher, the Caesar cipher.</Text>
                </View>  
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Imagine you are in ancient times, sending a messenger from one military camp to another.</Text>  
                </View>      
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>You need to encrypt the message in such a way that it's gibberish if your enemies intercept the messenger, but can be decoded into English by your commanders. How can you do this?</Text>  
                </View>   
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>First, you meet up with your commanders beforehand and agree on a special system called a Caesar Cypher. In this system, you all follow a simple rule: shift letters to the left in the alphabet when writing a letter.</Text>  
                </View>   
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>For example, E would become B:</Text>  
                </View>        
                <View style={styles.contentImageContainer}>
                    <Animated.Image source={require('../assets/infopng/caesar.png')}
                            style={mobile ? {
                                width:width-80,
                                height:(width-80)*(186/440)
                            } : {
                                width:width/4,
                                height:(width/4)*(186/440)
                            }}
                    />
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>After encrypting a string of letters, or message, in this fashion you send it out into the world. After your commanders get the message, they simply perform the opposite shift to reveal the message.</Text>  
                </View> 
                <View style={styles.sectionContent}>
                    <Text style={[styles.title, {marginTop:20}]}>Interactive Activity: Caesar Cipher</Text>
                </View>  
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Try typing a message of up to 15 characters, and see how it shifts.</Text>  
                </View> 
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>What happens if you use a letter like A that doesn't have any characters "before it" in the alphabet?</Text>  
                </View> 
                <View style={styles.activity}>
                    <View style={styles.encryptionSettings}>
                        <View style={{flex:1}}>
                            <Text style={styles.inputText}>
                                Message to Encode
                            </Text>
                            <TextInput 
                                style={styles.input}
                                onChangeText={(t) => encodeCaesar(t)}
                                value={plaintext}
                                placeholder={'Message...'}
                            />
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={styles.inputText}>
                                Left Shift
                            </Text>
                            <TextInput 
                                style={styles.input}
                                onChangeText={(t) => applyShift(t)}
                                value={shiftText}
                            />
                        </View>
                    </View>
                    {encoded.length == 0 && (<View style={styles.encryptionOutput}>
                        <Text style={[styles.paragraph]}>Waiting for valid message and shift...</Text>
                    </View>) || (<View style={styles.encryptionOutput}>
                        {encoded.map((set, index) => {
                            return (<View key={'set_'+index} style={styles.encryptionColumn}>
                                 <Text style={[styles.title]}>{set[0]}</Text>
                                 <Icon
                                    name='chevron-down'
                                    type='ionicon'
                                    size={16}
                                    color={colors.mainTextColor}
                                />
                                 <Text style={[styles.title]}>{set[1]}</Text>
                            </View>)
                        })}
                    </View>)}
                    {encoded.length > 0 && (<View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Final encrypted message: <Text style={{fontFamily:'PoppinsSemiBold'}}>{encodedText}</Text></Text>  
                    </View>)}
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Feel free to keep messing around with this cipher tool until you know what's happening.</Text>  
                </View> 
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>The major limitation of this cipher is its pretty easy to break. An attacker simply needs to guess or find out the shift number and methodology, and the system is exposed. Luckily, we have more advanced encryption methods available...</Text>  
                </View> 
            </View>)}
            {section == 1 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.largeTitle}>Advanced Cryptography</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Now that we have basic encryption under our belts, we can move on to the more complex types of encryption that are commonly used.</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>The cipher we learned in the previous section did an adequate enough job in ensuring that at a first glance, people would not be able to understand its content. However, a simple caesar cipher is not enough protection for your messages. Our attackers are not people, but the computers that run billions of operations per second. The 26! permutations needed to test for a caesar cipher is trivial.</Text>
                </View>
                <View style={styles.sectionContent}>
                <Text style={[styles.title]}>Symmetric Cryptography</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Encrypting your message symmetrically can be one such way. Symmetric encryption will require a single key, a string of completely random letters and numbers that will be used as your cipher. This key will jumble your message in a way that can only be decrypted by the other person with the same key, thus symmetry. Already compared to the caesar cipher, depending on the length of your key, an attacker's bruteforce strategy may scare them off!</Text>
                </View>
                <View style={styles.contentImageContainer}>
                    <Animated.Image source={require('../assets/infopng/symmetric.png')}
                            style={mobile ? {
                                width:width-80,
                                height:(width-80)*(353/924)
                            } : {
                                width:width/2,
                                height:(width/2)*(353/924)
                            }}
                    />
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph, { marginTop:20}]}> It is incredibly efficient in transporting information around. However, note that by utilizing this symmetric cryptography, the security around those keys must be airtight! If that single key were to be exposed to an attacker from either party, any encrypted data they acquire will be easily decrypted.</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style ={[styles.title, { marginTop:20}]}>Public-key Encryption</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style ={[styles.paragraph, {textAlign:'left', marginBottom:20}]}>Another alternative that you could try is public-key encryption. This version operates in a similar way, relying on keys as ciphers. However, in this case each person would need access to two keys, one private one for themselves (pk) and another that they share (sk). The public keys are used only to encrypt and are known by everyone. The private keys are then used to decrypt said messages.</Text>
                </View>
                <View style={styles.contentImageContainer}>
                    <Animated.Image source={require('../assets/infopng/asymmetric.png')}
                                style={mobile ? {
                                    width:width-80,
                                    height:(width-80)*(353/924)
                                } : {
                                    width:width/2,
                                    height:(width/2)*(353/924)
                                }}
                    />
                </View>
                <View style={styles.sectionContent}>
                    <Text style ={[styles.paragraph]}>Above we can see that both parties need their own pair of private-public keys. Alice's message is encrypted with Bob's public key so that the only way it can be decrypted is if the other party knew of Bob's private key.</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Public-key encryption is certainly secure what with the deciphering tool being more obfuscated. One problem that you might find when implementing it is that it will be much more power and time consuming. With two keys being assigned to every person in the network, computational power and storage requirements will be important to focus on.</Text>
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
                    title={section == 1 ? 'Move on to Anonymity!' : 'Forward'}
                    icon={<Icon
                        name='chevron-forward'
                        type='ionicon'
                        size={16}
                        color={ colors.mainTextColor }
                        style={{marginTop:2}}
                    />}
                    iconRight={true}
                    onPress={(section == 1) ? () => linkTo('/anonymity') : () => {
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