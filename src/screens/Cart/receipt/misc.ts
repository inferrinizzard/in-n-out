export const TAX_RATE = 10.25; // Francisquito -> Baldwin Park -> LA County

export const leftPadZeroes = (num: number) =>
	`00${num.toFixed(0).toString()}`.slice(-2);
