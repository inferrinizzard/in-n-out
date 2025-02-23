import type { ValueOf } from "@src/types/util";
import type { OptionConfigMap } from "./config";
import type { OptionFlagKey, OptionKey } from "./consts";

export type OptionConfig = ValueOf<typeof OptionConfigMap>;

export type OptionInstance<
	Option extends OptionKey,
	Config = (typeof OptionConfigMap)[Option],
> = {
	value: Config extends {
		options: Readonly<Array<infer Option>>;
	}
		? Option
		: never;

	count: Config extends {
		count: true;
	}
		? number
		: never;

	flags: Config extends {
		flags: Readonly<Array<infer Flag extends OptionFlagKey>>;
	}
		? Record<Flag, boolean | undefined>
		: never;
};
