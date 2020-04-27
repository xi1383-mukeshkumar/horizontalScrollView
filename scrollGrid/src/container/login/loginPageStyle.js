import {StyleSheet} from 'react-native';
import COLOR from '../../assets/color/color';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {flex: 1, marginHorizontal: 20},
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  welcomeText: {fontSize: 40, fontWeight: 'bold'},
  textInputContainer: {justifyContent: 'center', marginTop: 50},
  textInputStyle: {borderColor: COLOR.black, borderWidth: 1, height: 40},
  errorStyle: {color: COLOR.red, fontSize: 12},
  buttonContainer: {height: 50, width: '100%', marginTop: 25},
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  submitText: {fontSize: 20, color: COLOR.whiteColor},
});
