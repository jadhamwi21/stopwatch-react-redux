import { AppTitle } from "./components/AppTitle/AppTitle.js";
import TimerContainer from "./containers/TimerContainer.js";
import ButtonsContainer from "./containers/ButtonsContainer.js";
import LapsContainer from "./containers/LapsContainer.js";
import Styles from "./App.module.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
function App() {
	return (
		<Provider store={store}>
			<div className={Styles.AppWrapper}>
				<AppTitle />
				<TimerContainer />
				<ButtonsContainer />
				<LapsContainer />
			</div>
		</Provider>
	);
}

export default App;
