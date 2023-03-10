import { Dimensions, Appearance, StyleSheet } from 'react-native'

// Unchanging stylesheets and elements.
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const btnColors = {
  primary:'#3A86FF',
  caution:'#f1c40f',
  danger:'#e74c3c',
  success:'#2ecc71',
  info:'#41C3E0',
  light: '#FAFAFA',
}

// black #0D1014
// purple #826881
// dark purple #4D1C4B
// green 1DF01D
// light pink DEB1DC
export const colors = {
    mainBackground: '#23272A',
    infoBox: '#1A2B33',
    secondaryBackground: '#344150',
    mainTextColor: '#fff',
    secondaryTextColor: '#FAFAFA',
    mainHighlight: '#27ae60',
    secondaryHighlight: '#2ecc71',
    originators:'#5438DC',
    existants:'#D1943F',
    cybers:'#67AAF9',
}

// For all pages.
export const main = StyleSheet.create({
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    backgroundColor:colors.mainBackground,
    flex:1
  },
  mainContainer: {
  },
  row: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  largeTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:32,
    textAlign:'left',
    color:colors.mainTextColor
  },
  title: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign:'left',
    color:colors.mainTextColor
  },
  paragraph: {
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'left',
    color:colors.mainTextColor,
    flexWrap:'wrap'
  },
  infoBox: {
    padding:20,
    borderWidth:5,
    borderColor:colors.mainHighlight,
    backgroundColor:colors.mainBackground
  },
  navButton: {
    marginTop:10,
    borderRadius:20,
    backgroundColor:btnColors.primary
  },
  logo: {
    width:160,
    height:140,
  },
  section: {
    margin:20
  },
  sectionNav: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  webTrackingInteractiveContainer: {
    marginTop:20,
    marginBottom:20
  },
  link: {
    fontFamily:'PoppinsBold',
    textDecorationLine:'underline',
    textDecorationColor:colors.mainTextColor
  },
  sectionContent: {
    marginTop:20,
  },
  contentImageContainer: {
    margin:20
  },
  activity: {
    padding:20,
    borderWidth:5,
    borderColor:colors.mainHighlight,
    backgroundColor:colors.secondaryBackground,
    marginTop:20,
    marginBottom:20
  },
  encryptionSettings: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
  },
  input: {
    backgroundColor:colors.mainBackground,
    borderRadius:20,
    padding:10,
    color:colors.mainTextColor
  },
  inputText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
    color:colors.mainTextColor,
    flexWrap:'wrap',
    marginBottom:5
  },
  encryptionOutput: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  encryptionColumn: {
    padding:10,
    borderRadius:20,
    backgroundColor:colors.mainBackground,
    marginRight:10
  },
  options: {
    alignItems:'center',
    justifyContent:'center'
  },
  answerRow: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    justifyContent:'center'
  },
  answer: {
    fontFamily:'Poppins',
    fontSize:18,
    color:colors.mainTextColor,
    flexWrap:'wrap',
    marginLeft:10,
  },
})

export const header = StyleSheet.create({
  header: {
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:colors.secondaryBackground,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth:6,
    borderBottomColor:colors.mainHighlight
  },
  headerMobile: {
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:colors.secondaryBackground,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    borderBottomWidth:5,
    borderBottomColor:colors.mainHighlight
  },
  headerLeft: {
    flex:1,
  },
  logo: {
    width:80,
    height:70,
  },
  headerLinks: {
    flex:10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerBox: {
    paddingLeft:10,
    paddingRight:10,
  },
  headerBoxText: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  headerRight: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end'
  },
  mobileMenu: {
    padding:10,
    backgroundColor:colors.secondaryBackground,
    alignItems:'flex-end'
  },
  headerBoxMobile: {
    marginTop:7,
    marginBottom:7,
    flexDirection: 'row',
    alignItems:'center'
  },
  headerBoxTextMobile: {
    fontFamily:'Poppins',
    color:colors.secondaryTextColor,
    fontSize:18,
  },
  headerBoxTextMobileFocused: {
    fontFamily:'Poppins',
    color:colors.secondaryHighlight,
    marginBottom:2,
    fontSize:18,
  },
  headerListItemDot: {
    padding:4,
    marginLeft:7,
    borderRadius:10,
    backgroundColor:colors.secondaryHighlight
  },
  twitterIcon: {
    width:25,
    height:25
  },
  discordIcon: {
    width:25,
    height:25
  },
})

export const empty = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  }
})