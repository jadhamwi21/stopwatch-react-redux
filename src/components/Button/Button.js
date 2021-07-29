import React from "react";
import Styles from "./Button.module.css";
export const Button = ({ InnerContent, onClickHandler, shouldDisable }) => {
	let isDisabled;
	if (shouldDisable === undefined) {
		isDisabled = false;
	} else {
		isDisabled = shouldDisable;
	}
	return (
		<button
			onClick={isDisabled ? null : onClickHandler}
			className={Styles.Wrapper}
			disabled={isDisabled}
			onTouchStart={isDisabled ? null : onClickHandler}
			onTouchEnd={(e) => e.preventDefault()}
		>
			<p>{InnerContent}</p>
		</button>
	);
};

export default Button;
