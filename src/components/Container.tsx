import React, { memo } from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => (
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
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
    width: '100%',
  },
})

export default memo(Container)
