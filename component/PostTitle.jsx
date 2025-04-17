import { StyleSheet, Text } from 'react-native'

const truncateTitle = str => {
	if (str.length >= 50) {
		return str.substring(0, 50) + '...'
	}
	return str
}
export const PostTitle = ({ title }) => {
	return <Text style={styles.text}>{truncateTitle(title)}</Text>
}

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		fontWeight: 700,
	},
})
