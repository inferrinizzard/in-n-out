import type { ValueOf } from "@src/types/util";
import type { OptionConfigMap } from "./config";
import type { OptionFlagKey, OptionKey } from "./consts";

export type OptionConfig = ValueOf<typeof OptionConfigMap>;

type ValueOptionInstance<
	Option extends OptionKey,
	Config extends {
		options: Readonly<Array<string>>;
	} = Extract<
		(typeof OptionConfigMap)[Option],
		{ options: Readonly<Array<string>> }
	>,
> = {
	value: Config extends {
		options: Readonly<Array<infer OptionValue>>;
	}
		? OptionValue
		: never;

	flags?: Config extends {
		flags?: Readonly<Array<infer Flag extends OptionFlagKey>>;
	}
		? Record<Flag, boolean | undefined>
		: never;
};

type CountOptionInstance<
	Option extends OptionKey,
	Config extends {
		count: true;
	} = Extract<(typeof OptionConfigMap)[Option], { count: true }>,
> = {
	count: number;
	flags?: Config extends {
		flags?: Readonly<Array<infer Flag extends OptionFlagKey>>;
	}
		? Record<Flag, boolean | undefined>
		: never;
};

type FlagsOptionInstance<
	Option extends OptionKey,
	Config extends {
		flags?: Readonly<Array<OptionFlagKey>>;
	} = Extract<
		(typeof OptionConfigMap)[Option],
		{ flags?: Readonly<Array<OptionFlagKey>> }
	>,
> = {
	flags: Config extends {
		flags?: Readonly<Array<infer Flag extends OptionFlagKey>>;
	}
		? Record<Flag, boolean | undefined>
		: never;
};

type AllOptionInstance<
	Option extends OptionKey,
	Config = (typeof OptionConfigMap)[Option],
> = {
	value: Config extends {
		options: Readonly<Array<infer OptionValue>>;
	}
		? OptionValue
		: never;

	count: Config extends {
		count: true;
	}
		? number
		: never;

	flags?: Config extends {
		flags?: Readonly<Array<infer Flag extends OptionFlagKey>>;
	}
		? Record<Flag, boolean | undefined>
		: never;
};

export type OptionInstance<
	Option extends OptionKey,
	Config = (typeof OptionConfigMap)[Option],
> = Config extends { options: Readonly<Array<string>>; count: true }
	? AllOptionInstance<Option, Config>
	: Config extends { count: true }
		? CountOptionInstance<Option>
		: Config extends { options: Readonly<Array<string>> }
			? ValueOptionInstance<Option>
			: FlagsOptionInstance<Option>;
