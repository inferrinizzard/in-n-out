import type { SkuId } from "@data/types";
import type { OptionKey, OptionInstance } from "@data/options";
import type { ItemKey } from "@data/items";

export type SkuOptions = Record<OptionKey, OptionInstance>;

export interface SkuItem {
	id: SkuId;
	item: ItemKey;
	options?: SkuOptions;
	price: number;
	calories: number;
}
