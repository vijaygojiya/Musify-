import { StyleSheet } from "react-native";
import colors from "../../utils/colors";


import Method from "../../utils/method";
import styleConfig from "../../utils/styleConfig";
import GS from "../../utils/styles";


const styles = StyleSheet.create({
  pContainer: {
    borderRadius: styleConfig.countPixelRatio(10),
    bottom: 0,
    marginHorizontal: styleConfig.smartWidthScale(15),
    width: styleConfig.width - styleConfig.smartWidthScale(30),
    position: "absolute",
    marginTop: styleConfig.smartScale(15),
    marginBottom:styleConfig.smartScale(65),
    backgroundColor: colors.darkGrey,
    ...GS.shadowEffect,
  },
  vContainer: {
    paddingHorizontal: styleConfig.smartWidthScale(10),
    flexDirection: "row",
    alignItems: "center",
  },
  iCover: {
    borderRadius: styleConfig.countPixelRatio(10),
    marginVertical: styleConfig.smartScale(5),
    width: styleConfig.countPixelRatio(50),
    height: styleConfig.countPixelRatio(50),
  },
  vSongDetailContainer: {
    flex: 1,
    marginHorizontal: styleConfig.smartWidthScale(10),
  },
  tSongTitle: {
    fontSize: styleConfig.countPixelRatio(14),
    textAlign: "left",
  },
  tSongArtist: {
    opacity: 0.7,
    fontSize: styleConfig.countPixelRatio(12),
    textAlign: "left",
  },
  iPlayPause: {
    width: styleConfig.countPixelRatio(20),
    height: styleConfig.countPixelRatio(20),
    resizeMode: "contain",
    tintColor: colors.white,
  },
  pPlayPauseContainer: {
    width: styleConfig.countPixelRatio(25),
    height: styleConfig.countPixelRatio(25),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: styleConfig.smartWidthScale(5),
  },
});

export default styles;
