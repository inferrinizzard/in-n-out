export interface OptionConfig<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	options: Options;
	flags?: Flags;
}

export interface OptionInstance<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> {
	value: Options[number];
	flags?: { [F in Flags[number]]?: boolean };
}

export interface CountOptionInstance<
	Options extends readonly string[] = readonly string[],
	Flags extends readonly string[] = readonly string[],
> extends OptionInstance<Options, Flags> {
	count: number;
}
