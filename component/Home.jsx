import { ENV_VAR } from '@env'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
	Alert,
	FlatList,
	RefreshControl,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'
import { Loading } from './Loading'
import { PostDate } from './PostDate'
import { PostImages } from './PostImages'
import { PostTitle } from './PostTitle'

export const Home = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [items, setItems] = useState()
	const fetchPosts = () => {
		setIsLoading(true)
		axios
			.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${ENV_VAR}`)
			.then(({ data }) => {
				setItems(data.articles)
			})
			.catch(err => {
				console.log(err)
				Alert.alert('Ошибка', 'Не удалось получить статьи')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	useEffect(fetchPosts, [])
	if (isLoading) {
		return <Loading />
	}

	return (
		<View>
			<FlatList
				refreshControl={
					<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
				}
				data={items}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('FullPost', item)}
					>
						<View style={styles.post}>
							<PostImages urlToImage={item.urlToImage}> </PostImages>
							<View style={styles.view}>
								<PostTitle title={item.title}> </PostTitle>
								<PostDate publishedAt={item.publishedAt}> </PostDate>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	post: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 2,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
	},
	view: {
		flex: 1,
		justifyContent: 'center',
	},
})
