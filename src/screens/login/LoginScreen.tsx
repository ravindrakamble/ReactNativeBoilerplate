import { Background, Button, Header, Logo, TextInput } from '@components'
import { LoginScreenNavigationProps } from '@navigations/AppNavigation'
import { useNavigation } from '@react-navigation/native'
import { setData } from '@redux/reducer/sampleReducer'
import theme from '@theme/theme'
import { emailValidator, passwordValidator } from '@utils/AppUtils'
import { ACTION } from '@utils/Constants'
import React, { memo, useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '@hooks/common/hooks'

const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<LoginScreenNavigationProps>()
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const loggedIn = useAppSelector(state => state?.sample.loggedIn)

  console.log('loggedIn', loggedIn)
  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    dispatch(setData({ type: ACTION.USER_LOGIN }))
  }

  useEffect(() => {
    if (loggedIn) {
      navigation.replace('Root')
    }
  }, [loggedIn, navigation])

  return (
    <Background>
      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        blurOnSubmit={true}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('Password')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default memo(LoginScreen)
