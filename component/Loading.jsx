import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
	return (
		<View style={styles.loadingView}>
			<ActivityIndicator size='large' color='red' />
			<Text style={styles.loadingText}>Загрузка...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	loadingView: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingText: {
		marginTop: 20,
	},
})
