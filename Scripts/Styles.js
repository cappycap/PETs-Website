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
    backgroundColor:colors.mainHighlight,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
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

export const calculatorMobile = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:28,
  },
  link: {
    color:btnColors.primary
  },
  desc: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    marginTop:20,
    marginBottom:10,
    textAlign:'center'
  },
  calcNote: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:16,
    margin:10,
    textAlign: 'center'
  },
  calculator: {
    padding:20,
    backgroundColor:colors.secondaryBackground,
    borderRadius:20,
    marginTop:60,
    marginBottom:40
  },
  calculatorRow: {
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:10
  },
  calcRowInner: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  nftTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'center',
    marginLeft:15
  },
  calculatorTitleWrapper: {
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:10,
    borderBottomWidth:3,
    marginBottom:10,
    borderBottomColor:colors.mainBackground
  },
  calculatorTitle: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:25,
  },
  airdropInput: {
    backgroundColor:colors.mainBackground,
    height:40,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    width:70
  },
  airdropInputRight: {
    height:40,
    backgroundColor:colors.mainBackground,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:10,
  },
  airdropTextTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
    marginLeft:15
  },
  airdropInputRightText: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    textAlign:'center',
  },
  calculatorIterator: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorIteratorButton: {
    height:40,
    backgroundColor:btnColors.primary
  },
  calculatorIteratorText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
  },
  calculatorIteratorNum: {
    backgroundColor:colors.mainBackground,
    height:40,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorIteratorButtonText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
  },
  sliderContainer: {
    backgroundColor:colors.mainBackground,
    height:10,
    borderRadius:10,
    marginTop:20,
    marginBottom:20
  },
  sliderTrack: {
    backgroundColor:colors.mainTextColor,
    height:10,
    borderRadius:10
  },
  sliderThumb: {
    backgroundColor:btnColors.mainHighlight,
    width:50,
    height:50,
    borderRadius:10
  },
  resultStats: {
    margin:10,
  },
  resultStatsRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  resultStatsAmount: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    marginTop:10,
  },
  resultStatsTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'center'
  },
  results: {
    paddingTop:10,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultBox: {
    padding:10,
    borderRadius:10,
    backgroundColor:colors.mainBackground,
    flex:1,
    width:'100%'
  },
  resultBoxMid: {
    margin:10
  },
  resultBoxMidText: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign: 'center',
  },
  resultBoxNum: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:28,
    textAlign: 'center'
  },
  resultBoxBottom: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign: 'center'
  },
  resultBoxNumG: {
    color:btnColors.success,
    fontFamily:'Poppins',
    fontSize:28,
    textAlign: 'center'
  },
  resultBoxBottomG: {
    color:btnColors.success,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign: 'center'
  },
  resultsTitle: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:28,
  },
  resultText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
  },
  socialMediaRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twitterIconMobile: {
    width:40,
    height:40
  },
  discordIconMobile: {
    width:40,
    height:40
  },
})


export const calculator = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:28,
  },
  link: {
    color:btnColors.primary
  },
  desc: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    marginTop:20,
    marginBottom:10
  },
  calcNote: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:16,
    margin:10
  },
  calculator: {
    padding:20,
    backgroundColor:colors.secondaryBackground,
    borderRadius:20,
    marginTop:60,
    marginBottom:40
  },
  calculatorRow: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:10
  },
  nftTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'center',
    marginLeft:15
  },
  calculatorTitleWrapper: {
    paddingBottom:10,
    paddingTop:10,
    paddingLeft:10,
    borderBottomWidth:3,
    marginBottom:10,
    borderBottomColor:colors.mainBackground
  },
  calculatorTitle: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:25,
  },
  airdropInput: {
    backgroundColor:colors.mainBackground,
    height:40,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    width:70
  },
  airdropInputRight: {
    height:40,
    backgroundColor:colors.mainBackground,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:10,
  },
  airdropTextTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
    marginLeft:15
  },
  airdropInputRightText: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    textAlign:'center',
  },
  calculatorIterator: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorIteratorButton: {
    height:40,
    backgroundColor:btnColors.primary
  },
  calculatorIteratorText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
  },
  calculatorIteratorNum: {
    backgroundColor:colors.mainBackground,
    height:40,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorIteratorButtonText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
  },
  sliderContainer: {
    backgroundColor:colors.mainBackground,
    height:10,
    borderRadius:10,
    marginTop:20,
    marginBottom:20
  },
  sliderTrack: {
    backgroundColor:colors.mainTextColor,
    height:10,
    borderRadius:10
  },
  sliderThumb: {
    backgroundColor:btnColors.mainHighlight,
    width:50,
    height:50,
    borderRadius:10
  },
  resultStats: {
    margin:10,
  },
  resultStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  resultStatsAmount: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
  },
  resultStatsTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:22,
  },
  results: {
    paddingTop:10,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultBox: {
    padding:10,
    borderRadius:10,
    backgroundColor:colors.mainBackground,
    flex:1,
  },
  resultBoxMid: {
    margin:10
  },
  resultBoxMidText: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign: 'center',
  },
  resultBoxNum: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:28,
    textAlign: 'center'
  },
  resultBoxBottom: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign: 'center'
  },
  resultBoxNumG: {
    color:btnColors.success,
    fontFamily:'Poppins',
    fontSize:28,
    textAlign: 'center'
  },
  resultBoxBottomG: {
    color:btnColors.success,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign: 'center'
  },
  resultsTitle: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:28,
  },
  resultText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
  },
  socialMediaRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twitterIconMobile: {
    width:40,
    height:40
  },
  discordIconMobile: {
    width:40,
    height:40
  },
})

export const home = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
  },
  hudBackground: {
    flex:1,
    resizeMode: 'cover',
    opacity:0.8,
  },
  hudPixie: {
    width:windowWidth/2.5,
    height:windowWidth/2.5,
    position:'absolute',
    bottom:0,
    right:0
  },
  hudPixieMobile: {
    width:windowWidth/1.5,
    height:windowWidth/1.5,
    position:'absolute',
    bottom:0,
    right:0
  },
  viewMoreButton: {
    height:50,
    backgroundColor:colors.mainBackground,
    borderRadius:10,
    borderWidth:3,
    borderColor:colors.secondaryHighlight
  },
  viewMoreButtonContainer: {
    position:'absolute',
    bottom:(windowWidth/1.5/2)-45,
    left:25
  },
  viewMoreButtonTitle: {
    color:colors.secondaryHighlight,
    fontFamily:'Poppins'
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    textAlign:'center',
  },
  titleSection: {
    marginBottom:20
  },
  mobileHome: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  contentSectionMain: {
    padding:40,
    flexDirection: 'row',
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight
  },
  contentSectionMainMobile: {
    paddingTop:40,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:250,
    flexDirection: 'column',
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight,
    flex:1
  },
  content: {
    flex:1
  },
  socialMediaRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twitterIconMobile: {
    width:40,
    height:40
  },
  discordIconMobile: {
    width:40,
    height:40
  },
  pixieSpacer: {
    width:windowWidth/4
  },
  windowRow: {
    flexDirection:'row',
    justifyContent: 'center'
  },
  windowRowMobile: {
    flexDirection:'column',
    alignItems: 'center'
  },
  windowRowItem: {
    flex:1,
    flexWrap: 'wrap'
  },
  utilityTitle: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    textAlign:'center',
  },
  utilityText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
    flexWrap: 'wrap',
    textAlign:'center',
  }
})

export const roadmapMobile = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
  },
  hudBackground: {
    flex:1,
    resizeMode: 'cover',
    opacity:0.8,
  },
  hudPixie: {
    width:windowWidth/1.5,
    height:windowWidth/1.5,
    position:'absolute',
    bottom:0,
    right:0
  },
  viewMoreButton: {
    height:50,
    backgroundColor:colors.mainBackground,
    borderRadius:10,
    borderWidth:3,
    borderColor:colors.secondaryHighlight
  },
  viewMoreButtonContainer: {
    position:'absolute',
    bottom:(windowWidth/1.5/2)-40,
    left:30
  },
  viewMoreButtonTitle: {
    color:colors.secondaryHighlight,
    fontFamily:'Poppins'
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  titleSection: {
    marginBottom:20
  },
  mobileHome: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  contentSectionMain: {
    flex:1,
    paddingTop:40,
    paddingBottom:250,
    paddingLeft:40,
    paddingRight:40,
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight,
    alignItems: 'center',
  },
  content: {
    flex:1
  },
  socialMediaRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twitterIconMobile: {
    width:40,
    height:40
  },
  discordIconMobile: {
    width:40,
    height:40
  },
  pixieSpacer: {
    width:windowWidth/4
  },
  windowRow: {
    flexDirection:'row',
    justifyContent: 'center'
  },
  windowRowMobile: {
    flexDirection:'column',
    alignItems: 'center'
  },
  windowRowItem: {
    flex:1,
    flexWrap: 'wrap'
  },
  timelineHeaderSection: {
    alignItems: 'center'
  },
  timelineHeader: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    textAlign:'center',
    flexWrap: 'wrap',
  },
  timelineHeaderTime: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'center',
    flexWrap: 'wrap',
    borderBottomWidth:2,
    borderBottomColor:colors.secondaryBackground,
    width:'100%',
    marginBottom:5,
    paddingBottom:10
  },
  timelineItems: {
    flex:1,
  },
  timelineItem: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
    flexWrap: 'wrap',
    textAlign:'center',
    marginBottom:10
  },
  timelineSection: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:colors.infoBox,
    borderRadius:10,
    padding:20,
    width:'100%'
  },
  timelineConnector: {
    height:40,
    width:10,
    backgroundColor:colors.secondaryBackground,
  },
})

export const teamMobile = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
  },
  hudBackground: {
    flex:1,
    resizeMode: 'cover',
    opacity:0.8,
  },
  viewMoreButton: {
    height:50,
    backgroundColor:colors.mainBackground,
    borderRadius:10,
    borderWidth:3,
    borderColor:colors.secondaryHighlight
  },
  viewMoreButtonContainer: {
    position:'absolute',
    width:(windowWidth/2),
    left:windowWidth/4,
    bottom:50
  },
  viewMoreButtonTitle: {
    color:colors.secondaryHighlight,
    fontFamily:'Poppins'
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  titleSection: {
    marginBottom:20
  },
  contentSectionMain: {
    flex:1,
    paddingTop:40,
    paddingBottom:100,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight,
    alignItems: 'center',
  },
  content: {
    flex:1
  },
  desc: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:24,
    textAlign:'center',
    marginBottom:20,
    marginLeft:10,
    marginRight:10
  },
  teamSection: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamMember: {
    padding:20,
    marginTop:20,
    alignItems: 'center',
  },
  memberName: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:25,
    textAlign:'center',
    marginTop:10,
    lineHeight:25
  },
  memberTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
    marginBottom:10
  },
  teamImage: {
    width:windowWidth/1.3,
    height:windowWidth/1.3,
    borderRadius:15,
    borderWidth:5,
    borderColor:colors.mainHighlight
  },
  socialMediaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    width:25,
    height:25
  }
})

export const team = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
  },
  hudBackground: {
    flex:1,
    resizeMode: 'cover',
    opacity:0.8,
  },
  viewMoreButton: {
    height:50,
    backgroundColor:colors.mainBackground,
    borderRadius:10,
    borderWidth:3,
    borderColor:colors.secondaryHighlight
  },
  viewMoreButtonContainer: {
    position:'absolute',
    bottom:(windowWidth/1.5/2)-25,
    left:30
  },
  viewMoreButtonTitle: {
    color:colors.secondaryHighlight,
    fontFamily:'Poppins'
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  titleSection: {
    marginBottom:20
  },
  contentSectionMain: {
    flex:1,
    paddingTop:40,
    paddingBottom:50,
    paddingLeft:40,
    paddingRight:40,
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight,
    alignItems: 'center',
  },
  content: {
    flex:1
  },
  desc: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:24,
    textAlign:'center',
    marginBottom:20,
    marginLeft:windowWidth/5,
    marginRight:windowWidth/5
  },
  teamSection: {
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  teamMember: {
    padding:40,
    marginTop:20,
    alignItems: 'center',
  },
  memberName: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:25,
    textAlign:'center',
    marginTop:10,
    lineHeight:25
  },
  memberTitle: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:20,
    textAlign:'center',
    marginBottom:10
  },
  teamImage: {
    width:windowWidth/9,
    height:windowWidth/9,
    borderRadius:15,
    borderWidth:5,
    borderColor:colors.mainHighlight
  },
  socialMediaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    width:25,
    height:25
  }
})

export const roadmap = StyleSheet.create({
  construction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  mainContainer: {
    flex:1,
  },
  hudBackground: {
    flex:1,
    resizeMode: 'cover',
    opacity:0.8,
  },
  hudPixie: {
    width:windowWidth/2.5,
    height:windowWidth/2.5,
    position:'absolute',
    bottom:0,
    right:0
  },
  hudPixieMobile: {
    width:windowWidth/1.5,
    height:windowWidth/1.5,
    position:'absolute',
    bottom:0,
    right:0
  },
  viewMoreButton: {
    height:50,
    backgroundColor:colors.mainBackground,
    borderRadius:10,
    borderWidth:3,
    borderColor:colors.secondaryHighlight
  },
  viewMoreButtonContainer: {
    position:'absolute',
    bottom:(windowWidth/1.5/2)-25,
    left:30
  },
  viewMoreButtonTitle: {
    color:colors.secondaryHighlight,
    fontFamily:'Poppins'
  },
  title: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  titleSection: {
    marginBottom:20
  },
  mobileHome: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  contentSectionMain: {
    flex:1,
    paddingTop:40,
    paddingBottom:450,
    paddingLeft:40,
    paddingRight:40,
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight,
    alignItems: 'center',
  },
  contentSectionMainMobile: {
    paddingTop:40,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:250,
    flexDirection: 'column',
    borderBottomWidth:20,
    borderBottomColor:colors.mainHighlight,
    flex:1
  },
  content: {
    flex:1
  },
  socialMediaRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  twitterIconMobile: {
    width:40,
    height:40
  },
  discordIconMobile: {
    width:40,
    height:40
  },
  pixieSpacer: {
    width:windowWidth/4
  },
  windowRow: {
    flexDirection:'row',
    justifyContent: 'center'
  },
  windowRowMobile: {
    flexDirection:'column',
    alignItems: 'center'
  },
  windowRowItem: {
    flex:1,
    flexWrap: 'wrap'
  },
  timelineHeaderSection: {
    alignItems: 'center'
  },
  timelineHeader: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    textAlign:'center',
    flexWrap: 'wrap',
  },
  timelineHeaderTime: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'center',
    flexWrap: 'wrap',
  },
  timelineItems: {
    flex:1,
    marginLeft:30,
  },
  timelineItem: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
    flexWrap: 'wrap',
  },
  timelineSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex:1,
    backgroundColor:colors.infoBox,
    borderRadius:10,
    padding:40,
    width:'90%'
  },
  timelineConnector: {
    height:40,
    width:10,
    backgroundColor:colors.secondaryBackground,
  },
})

export const mint = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  }
})

export const whitepaper = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  }
})

export const empty = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  }
})