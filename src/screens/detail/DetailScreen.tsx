import { Button, Container, FlatListItem } from '@components'
import { DetailsScreenNavigationProps } from '@navigations/AppNavigation'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import useGetPosts from '../../hooks/useGetPosts'

const DetailScreen = () => {
  const navigation = useNavigation<DetailsScreenNavigationProps>()
  const { data, renderFooter, renderSeperator } = useGetPosts()

  const onGoToHomePressed = () => {
    navigation.replace('Root')
  }

  return (
    <Container>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={renderSeperator}
        ListFooterComponent={renderFooter}
        renderItem={item => <FlatListItem post={item.item} />}
      />
      <Button mode="contained" onPress={onGoToHomePressed}>
        Go to Home
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#cdcdcc09',
  },
  row: {
    height: 145,
  },
})
export default DetailScreen
