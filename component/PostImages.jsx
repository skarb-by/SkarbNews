import { Image, StyleSheet } from 'react-native'

export const PostImages = ({ urlToImage }) => {
	return <Image style={styles.image} source={{ uri: urlToImage }} />
}

const styles = StyleSheet.create({
	image: {
		width: 80,
		height: 80,
		borderRadius: 12,
		marginRight: 7,
	},
})
