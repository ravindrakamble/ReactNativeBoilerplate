import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useListUsersQuery } from '@api/UserApi'
import { Button, Container } from '@components'
import {
  HomeScreenNavigationProps,
  HomeScreenRouteProps,
} from '@navigations/AppNavigation'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Divider, List } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const HomeScreen = () => {
  const route = useRoute<HomeScreenRouteProps>()
  const navigation = useNavigation<HomeScreenNavigationProps>()
  console.log('route?.params', route?.params)
  const { data, isLoading, isError, error } = useListUsersQuery()
  console.log(isLoading, isError, error)

  const onGoToDetailsPressed = () => {
    navigation.navigate('Details')
  }
  return (
    <Container>
      <ScrollView style={styles.list}>
        {data?.map(user => {
          return (
            <View key={user.id}>
              <List.Item
                style={styles.row}
                title={`ID: ${user.id} Name: ${user.name}`}
                description={user.email}
                titleStyle={styles.title}
              />
              <Divider />
            </View>
          )
        })}
        <Button mode="contained" onPress={onGoToDetailsPressed} key="btnPosts">
          Go to Posts
        </Button>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  tracking: {
    backgroundColor: Colors.white,
  },
  list: {
    marginBottom: 20,
  },
  row: {
    height: 65,
  },
  title: {
    color: '#000',
  },
})
export default HomeScreen
