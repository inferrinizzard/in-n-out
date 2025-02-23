import type { ValueOf } from "@src/types/util";
import type { OptionConfigMap } from "./config";
import type { OptionFlagKey } from "./consts";

export type OptionConfig = ValueOf<typeof OptionConfigMap>;

export type OptionInstance<Config extends OptionConfig> = {
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
