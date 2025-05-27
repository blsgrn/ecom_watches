import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fontSizes, spacing } from '../constants/dimensions';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now</Text>
      <Text>Find your suitable watch now</Text>
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
});
