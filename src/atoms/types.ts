import type { OptionKey, OptionInstance } from "@data/options";
import type { ItemKey, ItemOptionMap } from "@data/items";
import type { SkuItemMap, SkuKey } from "@data/sku";

export type SkuOptions<
	Item extends ItemKey,
	Option extends OptionKey = Item extends keyof typeof ItemOptionMap
		? (typeof ItemOptionMap)[Item]["options"][number]
		: never,
> = { [O in Option]: OptionInstance<O> };

export interface SkuItem<
	Sku extends SkuKey,
	Item extends ItemKey = (typeof SkuItemMap)[Sku]["id"],
> {
	sku: Sku;
	item: Item;
	name: string;
	options?: SkuOptions<Item>;
	price: number;
	calories: number;
}
