import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { fontSizes, iconSizes, spacing } from '../constants/dimensions';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now</Text>
      <Text>Find your suitable watch now</Text>
      {/* search imput */}
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          {/* icon  */}
          <Image source={require('../assets/icons/search.png')} style={styles.logo} />
          <TextInput style={styles.TextInput} placeholder='Search Products' placeholderTextColor={colors.placeholderTextColor} fontFamily={fonts.DancingScript.medium}/>          
        </View>
        <View style={styles.categoryContainer}>
          <Image source={require('../assets/icons/categories.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    headline: {
        fontSize: fontSizes.xxl,
        // fontWeight: 'bold',
        color: colors.black,
        marginBottom: spacing.md,
        fontFamily: fonts.DancingScript.bold,
        textAlign: 'center',
    },
    mainInputContainer: {
        width: '100%',
        height: 50,        
        paddingHorizontal: spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing.lg,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'justify',
        marginVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 25,
    },
    logo: {
        width: iconSizes.md,
        height: iconSizes.md,
        tintColor: colors.gray,
    },
    TextInput: {
        flex: 1,
        height: '100%',
        fontSize: fontSizes.md,
        color: colors.textPrimary,
        paddingLeft: spacing.sm,
        fontFamily: fonts.Roboto.regular,
    },
});
