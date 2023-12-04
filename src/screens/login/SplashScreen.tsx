import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SplashScreenNavigationProps } from '@navigations/AppNavigation'

const SplashScreen = () => {
  console.log('Splash Screen Launched')
  const navigation = useNavigation<SplashScreenNavigationProps>()

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    timer = setTimeout(() => {
      navigation.replace('Login')
    }, 2000)

    return () => clearTimeout(timer)
  })
  return (
    <View style={styles.container}>
      <Image source={require('@assets/react_native.png')} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  name: {
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
})
export default SplashScreen
