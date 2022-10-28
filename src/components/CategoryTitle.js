import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './Text'

const CategoryTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text uppercase white preset='h4'>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing[3],
        borderTopWidth: 0.5,
        borderTopColor: '#979797'
    }
})

export default CategoryTitle