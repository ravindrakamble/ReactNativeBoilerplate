import { Button, Container } from '@components'
import { DetailsScreenNavigationProps } from '@navigations/AppNavigation'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  SectionList,
  View,
  Text,
  SectionListRenderItem,
  StyleSheet,
} from 'react-native'

const FoodSection = () => {
  const navigation = useNavigation<DetailsScreenNavigationProps>()

  const onGoToHomePressed = () => {
    navigation.replace('Root')
  }
  type Item = string
  interface Section {
    title: string
    data: Item[]
  }
  const renderItem1: SectionListRenderItem<Item, Section> = ({ item }) => {
    return (
      <View style={styles.item1}>
        <Text>Item 1 {item}</Text>
      </View>
    )
  }
  const renderItem2: SectionListRenderItem<Item, Section> = ({ item }) => {
    return (
      <View style={styles.item2}>
        <Text>Item 2 {item}</Text>
      </View>
    )
  }

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
      renderItem: renderItem1,
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      renderItem: renderItem2,
    },
  ]

  return (
    <Container>
      <SectionList
        style={styles.list}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
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
  item1: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  item2: {
    backgroundColor: '#fff9c2',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
})
export default FoodSection
