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
                        <View style = {[styles.row]}>
                            <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/mixnetsenders.png')}
                                                style={{
                                                    width:width/6,
                                                    height:(width/6)*(247/225)
                                                }}
                                />
                            </View>
                            <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                    <Animated.Image source={require('../assets/infopng/mixnetreceivers.png')}
                                                style={{
                                                    width:width/6,
                                                    height:(width/6)*(247/225)
                                                }}
                                />
                            </View>
                        </View>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Next, the receivers must then encrypt their public-key onto their message so that the mixers can determine who their respective sender is.</Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/senderencrypt.png')}
                                            style={{
                                                width:width/4,
                                                height:(width/4)*(35/169)
                                            }}
                            />
                    </View>

                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Before sending their message to the mixers, the receiver must encrypt their message once again, as determined by the mixers. </Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/mixerencrypt.png')}
                                            style={{
                                                width:width/4,
                                                height:(width/4)*(38/222)
                                            }}
                            />
                    </View>

                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Once the message has been successfully encrypted it will go through mixers until the message has been decrypted to the original message and its public key, </Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/mixerdecrypt.png')}
                                            style={{
                                                width:width/4,
                                                height:(width/4)*(330/749)
                                            }}
                            />
                    </View>

                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Ta-dah! The receiver is now able to read the sender's message</Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/receiverdecrypt.png')}
                                            style={{
                                                width:width/4,
                                                height:(width/4)*(49/68)
                                            }}
                            />
                    </View>

                    <Text style = {[styles.title, {textAlign: 'left', marginTop: 20}]}>What are the real-world applications of this technique?</Text>  
                    <View style = {[styles.row, {marginTop:30}]}>
                        <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                            <Animated.Image source={require('../assets/infopng/messages.png')}
                                            style={{
                                                width:width/6,
                                                height:(width/6)*(512/512)
                                            }}
                            />
                        </View>
                        <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                            <Animated.Image source={require('../assets/infopng/torpng.png')}
                                            style={{
                                                width:width/6,
                                                height:(width/6)*(512/512)
                                            }}
                            />
                        </View>
                        <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                            <Animated.Image source={require('../assets/infopng/email.png')}
                                            style={{
                                                width:width/6,
                                                height:(width/6)*(512/512)
                                            }}
                            />
                        </View>

                        <View style = {[styles.infoBox, {borderColor: 'transparent', maxWidth: '50%', margin: 'auto'} ]}>
                            
                        </View>
                    </View>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Mixers and techniques similar to it are most commonly found through applications that have networks of people sending messages to their service. These mixnets allow for confidentiality and the integrity of the messages to be maintained.</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}> </Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>The Tor browser is one of the most popular use cases of such. The user's connection to the Tor servers are unknown due to their connection being encrypted and bounced to different connection nodes. Just like in the mixnet, their connection gets decrypted at every step, until finally it is released to the internet.</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}> </Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Messages and emails work in exactly the way described above. Companies can't possibly provide each of their customers with their own network as a means for anonymity. And besides, no network can be perfectly secure. Therefore they conclude to use the size of their customers to their advantage by promoting anonymity through obscurity. By jumbling their customer's information together, even if the attacker gets past the network's secruity AND takes the message, they would have to figure out who's message it was going and which person it was going to.</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}> </Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>These are the strengths of utilizing mixnets, however they do come at a cost</Text>

                    <Text style = {[styles.title, {textAlign: 'left', marginTop: 20}]}>What do I have to pay to use this?</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left', marginTop: 20}]}>Simple! Time and Power.</Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                            <Animated.Image source={require('../assets/infopng/encdectime.png')}
                                            style={{
                                                width:width/3,
                                                height:(width/3)*(150/579)
                                            }}
                            />
                        </View>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Encryption and decryption are expensive operations, especially if the keys are long. The image above shows times for encryption and decryption on a single AES-128 key. In the worst-case where the company utilized the weakest CPU to encrypt the sender's message, it would take 60 amount of cycles. If the company were to scale the power of their computations, it would drop all the way to 6 cycles, a 10x gap! Likewise for decryprting, it would take around 6x the amount of cycles. That's not to include the possiblity of multiple mixers being present in the mixnet.</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}> </Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>It is important when you are planning to implement mixnets to take into account the costs that must be sacrificed.</Text>

                    <Text style = {[styles.largeTitle, {textAlign: 'center', marginTop: 20}]}>Interactive Activity</Text>
                </View>
            </View>)}
            {section == 1 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style = {[styles.largeTitle]}>Psuedonymization</Text>
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
                
                <View style = {[styles.infoBox, {borderColor: 'transparent', maxWidth: '50%', margin: 'auto'} ]}>
                    <Text style = {[styles.title, {textAlign: 'left'}]}>What is pseudonymization?</Text>  
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Pseudonymization is the process of taking data and altering it in a way that others cannot uniquely identify it. Take the table below, it has no pseudonymization techniques applied to it making it easy for attackers to identify a target in a dataset. </Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/deanonymizedtable.png')}
                                                style={{
                                                    width:width/3,
                                                    height:(width/3)*(291/682)
                                                }}
                                />
                    </View>
                    
                    
                    <Text style = {[styles.title, {textAlign: 'left', marginTop:20}]}>Pseuonymization techniques you can use</Text>
                    <Text style = {[styles.title, {textAlign: 'left', marginTop:20}]}>Censor your content</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Let's say you are maintaining a database with the information above. There exists key attributes, quasi-identifiers, and the sensitive attribute. If an attacker were to look at your database the key attribute along with the quasi-identifiers can easily link them to the senstive information they want to hide. Therefore the first step to anonymizing data is to outright censor key attributes. This includes emails, phone numbers, addresses, etc. </Text>
                    <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                            <Animated.Image source={require('../assets/infopng/uniquetable.png')}
                                                style={{
                                                    width:width/3,
                                                    height:(width/3)*(291/682)
                                                }}
                            />
                    </View>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>Poof! If an attacker was trying to tie the sensitive information to a target, their job just became significantly harder. Take Beth's situation, now attacker must now look for females born on 4/13/86, in the zip code 53715 who have heaptitis to be able to know Beth has hepatitis. That could be anyone in the world! That being said, this table still gives too much information to the attacker, so let us move onto the next step you can take.</Text>
                    

                    <Text style = {[styles.title, {textAlign: 'left', marginTop:20}]}>K-anonymity</Text>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>When given a set of data, we want to make sure that the quasi-identifiers themselves cannot easily distinguish a certain person. As said previously, it will be harder to find Beth with only quasi-identifiers, but it can still be done. DOB and zipcode especially have the ability to track a person down. To alleviate this, we want to form buckets of information. For example, take the following tables, of the two, which table gives you the most information?</Text>
                    <View style = {[styles.row, {marginTop:30}]}>
                        <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/kdata.png')}
                                                style={{
                                                    width:width/12,
                                                    height:(width/12)*(270/112)
                                                }}
                                />
                        </View>
                        <View style = {[styles.infoBox, {borderColor: 'transparent'}]}>
                                <Animated.Image source={require('../assets/infopng/kdataanon.png')}
                                                style={{
                                                    width:width/12,
                                                    height:(width/12)*(270/112)
                                                }}
                                />
                        </View>
                    </View>
                    <Text style = {[styles.paragraph, {textAlign: 'left'}]}>The one on the left, correct? The table on the right is how k-anonymity is applied. It generalizes the data into buckets and as a result provides more anonymity to the owner!</Text>
                    <Text style = {[styles.largeTitle, {textAlign: 'center', marginTop: 20}]}>Interactive Activity: Attacker</Text>
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