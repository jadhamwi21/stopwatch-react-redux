export const formatCentisecondsToTimeFormat_Minutes_Seconds_Centiseconds = (
	centiseconds
) => {
	const fillDigitForSingleDigits = (Digit) => {
		return Digit <= 9 ? "0" + Digit : Digit;
	};
	const Minutes = fillDigitForSingleDigits(Math.floor(centiseconds / 100 / 60));
	centiseconds = centiseconds % 6000;
	const Seconds = fillDigitForSingleDigits(Math.floor(centiseconds / 100));
	centiseconds = centiseconds % 100;
	const Centiseconds = fillDigitForSingleDigits(Math.floor(centiseconds));
	return {
		Minutes: Minutes.toString(),
		Seconds: Seconds.toString(),
		Centiseconds: Centiseconds.toString(),
	};
};
