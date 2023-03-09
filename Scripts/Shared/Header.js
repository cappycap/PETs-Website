import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { colors, header } from '../Styles.js'
import { useFonts } from 'expo-font'
import { Icon } from 'react-native-elements'

export default function Header(props) {

    // Nav.
    var linkTo = useLinkTo()

    // State.
    const [mobileMenu, setMobileMenu] = useState(false)
    const [styles, setStyles] = useState(header)

    const enableMintAndQuests = true

    // Main starter function.
    useEffect(() => {
        console.log('useEffect header props:',props)
    }, [])

    return (<View style={styles.container}>
        {props.mobile && (<View>
        <View style={styles.headerMobile}>
            <View style={styles.headerLeftMobile}>
                <Animated.Image 
                    source={require('../../assets/icons/main.png')}
                    style={[{
                        width:140,
                        height:70,
                        left:-20
                    }]}
                /> 
            </View>
            <Icon
                name='menu'
                type='ionicon'
                size={40}
                color={colors.mainTextColor}
                onPress={() => setMobileMenu(!mobileMenu)}
            />
        </View>
        {mobileMenu && (<View style={styles.mobileMenu}>
            {props.page == 0 && (<TouchableOpacity style={styles.headerBoxMobile} disabled={true}>
                <Text style={[styles.headerBoxTextMobileFocused]}>Home</Text>
                <View style={styles.headerListItemDot}></View>
            </TouchableOpacity>) || (<TouchableOpacity style={styles.headerBoxMobile} onPress={() => linkTo('/')}>
                <Text style={[styles.headerBoxTextMobile]}>Home</Text>
            </TouchableOpacity>)}
            {enableMintAndQuests && (<View>
                {props.page == 1 && (<TouchableOpacity style={styles.headerBoxMobile} disabled={true}>
                    <Text style={[styles.headerBoxTextMobileFocused]}>Web Tracking</Text>
                    <View style={styles.headerListItemDot}></View>
                </TouchableOpacity>) || (<TouchableOpacity style={styles.headerBoxMobile} onPress={() => linkTo('/web-tracking')}>
                    <Text style={[styles.headerBoxTextMobile]}>Web Tracking</Text>
                </TouchableOpacity>)}
            </View>)}
            {props.page == 2 && (<TouchableOpacity style={styles.headerBoxMobile} disabled={true}>
                <Text style={[styles.headerBoxTextMobileFocused]}>Basic Encryption</Text>
                <View style={styles.headerListItemDot}></View>
            </TouchableOpacity>) || (<TouchableOpacity style={styles.headerBoxMobile} onPress={() => linkTo('/basic-encryption')}>
                <Text style={[styles.headerBoxTextMobile]}>Basic Encryption</Text>
            </TouchableOpacity>)}
            {enableMintAndQuests && (<View>
                {props.page == 3 && (<TouchableOpacity style={styles.headerBoxMobile} disabled={true}>
                    <Text style={[styles.headerBoxTextMobileFocused]}>Anonymity</Text>
                    <View style={styles.headerListItemDot}></View>
                </TouchableOpacity>) || (<TouchableOpacity style={styles.headerBoxMobile} onPress={() => linkTo('/anonymity')}>
                    <Text style={[styles.headerBoxTextMobile]}>Anonymity</Text>
                </TouchableOpacity>)}
            </View>)}
        </View>)}
    </View>) || (<View style={styles.header}>
        <View style={styles.headerLeft}>
            <Animated.Image 
                source={require('../../assets/icons/main.png')}
                style={[styles.logo]}
            /> 
        </View>
        <View style={styles.headerLinks}>
            <TouchableOpacity style={styles.headerBox} onPress={() => linkTo('/')}>
                <Text style={[styles.headerBoxText]}>Home</Text>
            </TouchableOpacity>
            {enableMintAndQuests && (<TouchableOpacity style={styles.headerBox} onPress={() => linkTo('/web-tracking')}>
                <Text style={[styles.headerBoxText]}>Web Tracking</Text>
            </TouchableOpacity>)}
            <TouchableOpacity style={styles.headerBox} onPress={() => linkTo('/basic-encryption')}>
                <Text style={[styles.headerBoxText]}>Basic Encryption</Text>
            </TouchableOpacity>
            {enableMintAndQuests && (<TouchableOpacity style={styles.headerBox} onPress={() => linkTo('/anonymity')}>
                <Text style={[styles.headerBoxText]}>Anonymity</Text>
            </TouchableOpacity>)}
        </View>
        <View style={styles.headerRight}>
        </View>
    </View>)}
    </View>)

}