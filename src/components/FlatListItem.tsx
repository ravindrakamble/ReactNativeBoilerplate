import React from 'react'
import { List } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import Post from '@api/data/Post'

type ItemProps = {
  post: Post
}
class FlatListItem extends React.PureComponent<ItemProps> {
  render() {
    const { post } = this.props

    return (
      <List.Item
        style={styles.row}
        key={post.id}
        titleNumberOfLines={2}
        title={post.title.toUpperCase()}
        descriptionNumberOfLines={5}
        description={post.body}
      />
    )
  }
}

const styles = StyleSheet.create({
  row: {
    height: 145,
  },
})

export default FlatListItem
