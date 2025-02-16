import type { OptionKey, OptionInstance } from "@data/options";
import type { ItemKey } from "@data/items";
import type { MenuItemKey } from "@data/menu";

export type SkuOptions = Record<OptionKey, OptionInstance>;

export interface SkuItem {
	id: MenuItemKey;
	item: ItemKey;
	name: string;
	options?: SkuOptions;
	price: number;
	calories: number;
}
