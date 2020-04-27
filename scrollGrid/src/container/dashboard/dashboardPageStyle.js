import {StyleSheet} from 'react-native';
import COLOR from '../../assets/color/color.js';
import COLORS from '../../assets/color/color.js';

export default StyleSheet.create({
  container: {flex: 1},
  searchContainer: {
    marginHorizontal: '10%',
    backgroundColor: COLOR.whiteColor,
    justifyContent: 'center',
    marginTop: -20,
    borderRadius: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 45,
  },
  iconViewStyle: {
    backgroundColor: COLOR.whiteColor,
    position: 'absolute',
    left: 15,
  },
  imageStyle: {width: 25, height: 25},
  textContainer: {marginHorizontal: 20, marginTop: 20},
  labelStyle: {fontSize: 16, fontWeight: 'bold'},
  scrollviewContainer: {marginTop: 5},
  imageContainerStyle: {width: 100, height: 100},
  containerStyle: {width: 100},
  nolabelStyle: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: 'center',
  },
  oval: {
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: COLORS.enableButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {fontSize: 40, fontWeight: 'bold'},
});
