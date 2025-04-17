import React, { useCallback, useEffect, useState } from 'react'
import {
	Image,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import { Loading } from './Loading'

export const FullPost = ({ route, navigation }) => {
	const { urlToImage, content, title, author } = route.params
	const [refreshing, setRefreshing] = useState(true)

	useEffect(() => {
		navigation.setOptions({
			title: title,
		})
		setRefreshing(false)
	})

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 500)
	}, [])

	if (refreshing) {
		return <Loading />
	}

	return (
		<View style={styles.view}>
			<Image style={styles.PostImage} source={{ uri: urlToImage }} />
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<Text style={styles.PostText}>{content}</Text>
				<Text style={styles.PostAuthor}>{author}</Text>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	PostImage: {
		width: '100%',
		height: '50%',
		resizeMode: 'stretch',
		borderRadius: 10,
		marginBottom: 5,
		justifyContent: 'center',
	},

	PostText: {
		fontSize: 18,
		lineHeight: 24,
		textAlign: 'justify',
	},
	PostAuthor: {
		fontSize: 13,
		paddingTop: 10,
		textAlign: 'right',
	},
	view: {
		padding: 10,
		flex: 1,
	},

	loadingView: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},

	loadingText: {
		marginTop: 10,
	},

	abc: {
		flex: 1,
	},
})
