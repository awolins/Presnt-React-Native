import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const colors = {
	primary: '#65C5FF',		//Primary Light Blue
	darkBlue: '#0076FF',	//Darker Blue (for 'links')
	lightText: '#7E7D81',	//Light color for text (in between very light and dark)
  medLightText: '#979797',
	darkText: 'black',
	light: '#D6D6D6',			
  background: '#F0F0F0',
  backgroundLight: 'white',
	navBar: '#FAFAFA',
	navBarBorder: '#B2B2B2',
	inactivePrimary: '#A0C8E1',
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.backgroundLight,
  },

  inputContainer: {
    padding: 20,
    width: '100%',
  },

  input: {
    textAlign: 'center',
    height: 40,
    color: '#333333',
  },

  authInput: {
    textAlign: 'center',
    height: 40,
    color: '#333333',
    borderBottomColor: 'black',
    borderBottomWidth: 20
  },
});

const icons = {
	rightArrow : (<Icon name="ios-arrow-forward" size={40} color={colors.light} />),
	leftArrow : (<Icon name="ios-arrow-back" size={40} color={colors.light} />),
	homeActive: (<Icon name="ios-home" size={25} color={colors.darkBlue} />),
	homeInactive: (<Icon name="ios-home-outline" size={25} color={colors.light} />),
	coursesActive: (<Icon name="ios-school" size={25} color={colors.darkBlue} />),
	coursesInactive : (<Icon name="ios-school-outline" size={25} color={colors.light} />),
	settingsActive : (<Icon name="ios-settings" size={25} color={colors.darkBlue} />),
	settingsInactive: (<Icon name="ios-settings-outline" size={25} color={colors.light} />),
};

module.exports = { baseStyles, colors, icons };
