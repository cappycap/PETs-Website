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
                <View style={styles.sectionContent}>        
                    <Text style={[styles.title]}>What are mixnets?</Text>  
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Mixnets are applications that can obscure the directions that an input takes to get to its output.</Text>
                    <View style={styles.contentImageContainer}>
                        <Animated.Image source={require('../assets/infopng/mixnet.png')}
                            style={{
                                width:width/2,
                                height:(width/2)*(210/870)
                            }}
                        />
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.title]}>How do they work?</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>First, mixnets require a network of "senders" and "receivers." This is a critical first step.</Text>
                    </View>
                    <View style={[styles.row]}>
                         <View style={styles.contentImageContainer}>
                            <Animated.Image source={require('../assets/infopng/mixnetsenders.png')}
                                style={{
                                    width:width/6,
                                    height:(width/6)*(247/225)
                                }}
                            />
                        </View>
                        <View style={styles.contentImageContainer}>
                            <Animated.Image source={require('../assets/infopng/mixnetreceivers.png')}
                                style={{
                                    width:width/6,
                                    height:(width/6)*(247/225)
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Next, the receivers must then encrypt their public-key onto their message so that the mixers can determine who their respective sender is.</Text>
                    </View>
                    <View style={styles.contentImageContainer}>
                        <Animated.Image source={require('../assets/infopng/senderencrypt.png')}
                            style={{
                                width:width/4,
                                height:(width/4)*(35/169)
                            }}
                        />
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Before sending their message to the mixers, the receiver must encrypt their message once again, as determined by the mixers. </Text>
                    </View>
                    <View style={styles.contentImageContainer}>
                        <Animated.Image source={require('../assets/infopng/mixerencrypt.png')}
                            style={{
                                width:width/4,
                                height:(width/4)*(38/222)
                            }}
                        />
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Once the message has been successfully encrypted it will go through mixers until the message has been decrypted to the original message and its public key, </Text>
                    </View>
                    <View style={styles.contentImageContainer}>
                        <Animated.Image 
                            source={require('../assets/infopng/mixerdecrypt.png')}
                            style={{
                                width:width/4,
                                height:(width/4)*(330/749)
                            }}
                        />
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Ta-dah! The receiver is now able to read the sender's message</Text>
                    </View>
                    <View style={styles.contentImageContainer}>
                        <Animated.Image source={require('../assets/infopng/receiverdecrypt.png')}
                            style={{
                                width:width/4,
                                height:(width/4)*(49/68)
                            }}
                        />
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.title]}>What are the real-world applications of this technique?</Text>  
                    </View>
                    <View style={[styles.row, {marginTop:30}]}>
                        <View style={styles.contentImageContainer}>
                            <Animated.Image source={require('../assets/infopng/messages.png')}
                                style={{
                                    width:width/6,
                                    height:(width/6)*(512/512)
                                }}
                            />
                        </View>
                        <View style={styles.contentImageContainer}>
                            <Animated.Image source={require('../assets/infopng/torpng.png')}
                                style={{
                                    width:width/6,
                                    height:(width/6)*(512/512)
                                }}
                            />
                        </View>
                        <View style={styles.contentImageContainer}>
                            <Animated.Image source={require('../assets/infopng/email.png')}
                                style={{
                                    width:width/6,
                                    height:(width/6)*(512/512)
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Mixers and techniques similar to it are most commonly found through applications that have networks of people sending messages to their service. These mixnets allow for confidentiality and the integrity of the messages to be maintained.</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>The Tor browser is one of the most popular use cases of such. The user's connection to the Tor servers are unknown due to their connection being encrypted and bounced to different connection nodes. Just like in the mixnet, their connection gets decrypted at every step, until finally it is released to the internet.</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Messages and emails work in exactly the way described above. Companies can't possibly provide each of their customers with their own network as a means for anonymity. And besides, no network can be perfectly secure. Therefore they conclude to use the size of their customers to their advantage by promoting anonymity through obscurity. By jumbling their customer's information together, even if the attacker gets past the network's secruity AND takes the message, they would have to figure out who's message it was going and which person it was going to.</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.title]}>What do I have to pay to use this?</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Simple! Time and Power.</Text>
                    </View>
                    <View style={styles.contentImageContainer}>
                        <Animated.Image source={require('../assets/infopng/encdectime.png')}
                            style={{
                                width:width/3,
                                height:(width/3)*(150/579)
                            }}
                        />
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Encryption and decryption are expensive operations, especially if the keys are long. The image above shows times for encryption and decryption on a single AES-128 key. In the worst-case where the company utilized the weakest CPU to encrypt the sender's message, it would take 60 amount of cycles. If the company were to scale the power of their computations, it would drop all the way to 6 cycles, a 10x gap! Likewise for decryprting, it would take around 6x the amount of cycles. That's not to include the possiblity of multiple mixers being present in the mixnet.</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>It is important when you are planning to implement mixnets to take into account the costs that must be sacrificed.</Text>
                    </View>
                </View>
            </View>)}
            {section == 1 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={[styles.largeTitle]}>Psuedonymization</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.title]}>What is pseudonymization?</Text>  
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Pseudonymization is the process of taking data and altering it in a way that others cannot uniquely identify it. Take the table below, it has no pseudonymization techniques applied to it making it easy for attackers to identify a target in a dataset. </Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>While you may not do this much, it's important to understand how a company with lots of data anonymizes what it collects.</Text>  
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>We will demonstrate how to anonymize the following database representative of what a big data company might possess.</Text>  
                </View>
                <View style={styles.contentImageContainer}>
                    <Animated.Image source={require('../assets/infopng/deanonymizedtable.png')}
                        style={{
                            width:width/3,
                            height:(width/3)*(291/682)
                        }}
                    />
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.largeTitle]}>Pseuonymization Techniques</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.title]}>Censoring Content</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Let's say you are maintaining a database with the information above. There exists key attributes, quasi-identifiers, and the sensitive attribute. If an attacker were to look at your database the key attribute along with the quasi-identifiers can easily link them to the senstive information they want to hide. Therefore the first step to anonymizing data is to outright censor key attributes. This includes emails, phone numbers, addresses, etc. </Text>
                </View>
                <View style={styles.contentImageContainer}>
                    <Animated.Image source={require('../assets/infopng/uniquetable.png')}
                        style={{
                            width:width/3,
                            height:(width/3)*(291/682)
                        }}
                    />
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>Poof! If an attacker was trying to tie the sensitive information to a target, their job just became significantly harder. Take Beth's situation, now attacker must now look for females born on 4/13/86, in the zip code 53715 who have heaptitis to be able to know Beth has hepatitis. That could be anyone in the world! That being said, this table still gives too much information to the attacker, so let us move onto the next step you can take.</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.title]}>K-Anonymity</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>When given a set of data, we want to make sure that the quasi-identifiers themselves cannot easily distinguish a certain person. As said previously, it will be harder to find Beth with only quasi-identifiers, but it can still be done. DOB and zipcode especially have the ability to track a person down. To alleviate this, we want to form buckets of information. For example, take the following tables, of the two, which table gives you the most information?</Text>
                </View>
                <View style={[styles.row, {marginTop:30}]}>
                    <View style={[styles.infoBox, {borderColor: 'transparent'}]}>
                        <Animated.Image source={require('../assets/infopng/kdata.png')}
                             style={{
                                 width:width/12,
                                 height:(width/12)*(270/112)
                             }}
                        />
                    </View>
                    <View style={[styles.infoBox, {borderColor: 'transparent'}]}>
                        <Animated.Image source={require('../assets/infopng/kdataanon.png')}
                            style={{
                                width:width/12,
                                height:(width/12)*(270/112)
                            }}
                        />
                    </View>
                </View>
                <View style={styles.sectionContent}>
                    <Text style={[styles.paragraph]}>The one on the left, correct? The table on the right is how k-anonymity is applied. It generalizes the data into buckets and as a result provides more anonymity to the owner!</Text>
                </View>
            </View>)}
            {section == 2 && (<View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={[styles.largeTitle]}>Final Thoughts</Text>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Thank you for taking the time to read through our education material!</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Feel free to reach out with any ideas for improvement: <TouchableOpacity onPress={() => window.open('mailto:bullara2@wwu.edu', '_blank')}><Text style={styles.link}>bullara2@wwu.edu</Text></TouchableOpacity></Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>This site was made by Adam Bullard and Orlando Besorio for CSCI 497X/597X Winter 2023 at WWU</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph]}>Thank you to the following individuals and websites for their educational materials or images:</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph,styles.link]}>
                            <TouchableOpacity onPress={() => window.open('https://www.shrirangmare.com/cs497x-597x/', '_blank')}>
                                Dr. Shrirang Mare
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph,styles.link]}>
                            <TouchableOpacity onPress={() => window.open('https://courses.cs.washington.edu/courses/cse484/21sp/', '_blank')}>
                                Dr. Yoshi Kohno
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={[styles.paragraph,styles.link]}>
                            <TouchableOpacity onPress={() => window.open('https://www.bounteous.com/insights/2020/04/09/google-chrome-third-party-cookies', '_blank')}>
                                Bounteous.com
                            </TouchableOpacity>
                        </Text>
                    </View>
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
                {section != 2 && (<Button 
                    buttonStyle={styles.navButton}
                    title={'Forward'}
                    icon={<Icon
                        name='chevron-forward'
                        type='ionicon'
                        size={16}
                        color={ colors.mainTextColor }
                        style={{marginTop:2}}
                    />}
                    iconRight={true}
                    onPress={() => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        setSection(section+1)
                    }}
                />)}
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