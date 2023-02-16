import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import styleConfig from "../../utils/styleConfig";



const styles = StyleSheet.create({
  gradientContainer:{
    flex:1,
  },
  centeredView: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  tTime: {
    width: styleConfig.smartWidthScale(40),
    // marginHorizontal: styleConfig.smartWidthScale(5),
    fontSize: styleConfig.countPixelRatio(16),
    textAlign: "left",
  },

  vProgrsBarSection: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  pCloseContainer: {
    marginHorizontal: styleConfig.smartWidthScale(10),
    marginVertical: styleConfig.smartScale(10),
    width: styleConfig.countPixelRatio(40),
    height: styleConfig.countPixelRatio(40),
    justifyContent: "center",
    alignItems: "center",
  },
  iClose: {
    width: styleConfig.countPixelRatio(22),
    height: styleConfig.countPixelRatio(22),
    resizeMode: "contain",
  },
  iAlbum: {
    alignSelf: "center",
    width: styleConfig.countPixelRatio(400),
    height: styleConfig.countPixelRatio(420),
    marginVertical: styleConfig.smartScale(20),
    borderRadius: styleConfig.countPixelRatio(10),
    resizeMode: 'contain'
  },
  iBgAlbum:{
    width: styleConfig.width,
    height: styleConfig.height,
  },
  vFunctionContainer: {
    marginVertical: styleConfig.smartScale(10),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  vControlContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pNextPreviousContainer: {
    marginHorizontal: styleConfig.smartWidthScale(10),
    width: styleConfig.countPixelRatio(80),
    height: styleConfig.countPixelRatio(80),
    justifyContent: "center",
    alignItems: "center",
  },
  iNextPrevious: {
    width: styleConfig.countPixelRatio(30),
    height: styleConfig.countPixelRatio(30),
    resizeMode: "contain",
  },

  iPlayPause: {
    width: styleConfig.countPixelRatio(75),
    height: styleConfig.countPixelRatio(75),
    resizeMode: "contain",
  },
  tSongTitle: {
    marginVertical: styleConfig.smartScale(2),
    fontSize: styleConfig.countPixelRatio(22),
    textAlign: "left",
  },
  tSongArtist: {
    opacity: 0.7,
    marginVertical: styleConfig.smartScale(2),
    fontSize: styleConfig.countPixelRatio(16),
    textAlign: "left",
  },
  vTitleContainer: {
    marginVertical: styleConfig.smartScale(10),
    marginHorizontal: styleConfig.smartWidthScale(15),
  },
});

export default styles;
