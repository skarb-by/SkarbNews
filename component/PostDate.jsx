import { StyleSheet, Text } from 'react-native'

export const PostDate = ({ publishedAt }) => {
	return (
		<Text style={styles.text}>
			{new Date(publishedAt).toLocaleDateString()}
		</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		color: 'rgba(0, 0, 0, 0.4)',
		marginTop: 3,
	},
})
