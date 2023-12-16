import React, { memo } from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import baseStyle from '@theme/baseStyle'

type Props = {
  children: React.ReactNode
}

const Background = ({ children }: Props) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    ...baseStyle.flex,
    width: '100%',
  },
  container: {
    ...baseStyle.flex,
    ...baseStyle.centralize,
    padding: 20,
    width: '100%',
  },
})

export default memo(Background)
