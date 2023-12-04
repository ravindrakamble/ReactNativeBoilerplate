import {
  BackButton,
  Background,
  Button,
  Header,
  Logo,
  TextInput,
} from '@components'
import { PasswordScreenNavigationProps } from '@navigations/AppNavigation'
import { useNavigation } from '@react-navigation/native'
import theme from '@theme/theme'
import { emailValidator } from '@utils/AppUtils'
import React, { memo, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<PasswordScreenNavigationProps>()
  const [email, setEmail] = useState({ value: '', error: '' })

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value)

    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }

    navigation.navigate('Login')
  }

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Login')} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  )
}

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
})

export default memo(ForgotPasswordScreen)
