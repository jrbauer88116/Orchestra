import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import Store from './src/store'
import App from './src/app'

const Root = class Orchestra extends Component {
	render() {
		return (
			<Provider store={Store}>
				<App />
			</Provider>
		)
	}
}

AppRegistry.registerComponent('Orchestra', () => Root)
