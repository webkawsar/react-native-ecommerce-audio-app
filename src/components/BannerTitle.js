import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'




const BannerTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/audiophile.png')} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BannerTitle