import React, { useRef } from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import type { RouteProp } from '@react-navigation/native'
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  DetailScreen,
  RegisterScreen,
  FoodScreen,
} from '@screens'
import theme from '@theme/theme'
import ForgotPasswordScreen from '@screens/login/ForgotPasswordScreen'

export type RootStackParamList = {
  Root: undefined
  Splash: undefined
  Password: undefined
  Register: undefined
  Home: { userId: string }
  Login: undefined
  Details: { sort: 'latest' | 'top' } | undefined
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
      <Drawer.Screen name="Food" component={FoodScreen} />
    </Drawer.Navigator>
  )
}

const AppNavigation = () => {
  const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>()
  const navigationRef = useNavigationContainerRef()
  const routeNameRef = useRef<string>()
  const processRouteChange = async () => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = navigationRef?.getCurrentRoute()?.name
    const trackScreenView = (routeName: any) => {
      // Your implementation of analytics goes here!
      console.log('Screen visited', routeName)
    }

    if (previousRouteName !== currentRouteName) {
      // Save the current route name for later comparison
      routeNameRef.current = currentRouteName

      // Replace the line below to add the tracker from a mobile analytics SDK
      trackScreenView(currentRouteName)
    }
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef
          ? navigationRef?.getCurrentRoute()?.name
          : ''
      }}
      onStateChange={() => {
        processRouteChange().catch(err => {
          console.log(err)
        })
      }}>
      <Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Screen
          name="Root"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Password"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export type PasswordScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Password'
>

export type SplashScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>
export type LoginScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>
export type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>
export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>
export type DetailsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>

export default AppNavigation
