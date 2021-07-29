import Styles from "./Styles.module.css";
import { connect } from "react-redux";
import Lap from "../components/Lap/Lap.js";

const LapsContainer = ({ LapsList }) => {
	return (
		<div className={Styles.LapsContainer}>
			{LapsList.map((lap) => {
				return <Lap individualLap={lap} key={lap} />;
			})}
		</div>
	);
};
const mapStateToProps = (state) => ({
	LapsList: state.Lap.LapsList,
});
export default connect(mapStateToProps, null)(LapsContainer);
