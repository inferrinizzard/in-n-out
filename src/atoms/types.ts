import type { OptionKey, OptionInstance } from "@data/options";
import type { ItemKey } from "@data/items";
import type { SkuKey } from "@data/sku";

export type SkuOptions = Record<OptionKey, OptionInstance>;

export interface SkuItem {
	sku: SkuKey;
	item: ItemKey;
	name: string;
	options?: SkuOptions;
	price: number;
	calories: number;
}
