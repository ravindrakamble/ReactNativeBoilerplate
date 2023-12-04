import React, { useEffect } from 'react'
import { useLazyPostsQuery } from '@api/PostApi'
import { ActivityIndicator, Divider, MD2Colors } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const useGetPosts = () => {
  const [getPosts, { data, isLoading, isError, error }] = useLazyPostsQuery()

  useEffect(() => {
    const fetchData = async () => {
      console.log('Calling API')
      await getPosts()
    }
    fetchData().catch(err => console.log(err))
  }, [getPosts])

  const renderFooter = () => {
    if (!isLoading) {
      return null
    }

    return (
      <View style={styles.footer}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    )
  }

  const renderSeperator = () => {
    return <Divider />
  }

  return {
    data,
    isLoading,
    isError,
    error,
    renderFooter,
    renderSeperator,
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
})
export default useGetPosts
