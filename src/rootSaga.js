import overview from './components/overview/saga'

const root = function* Sagas() {
	yield [
		overview(),
	]
}

export default root