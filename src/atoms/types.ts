import type { SkuId } from "@data/menu";
import type { OptionKey } from "@data/customisations/keys";
import type { OptionInstance } from "@data/options";
import type { ItemKey } from "@data/items";

export interface SkuItem {
	id: SkuId;
	item: ItemKey;
	options?: Record<OptionKey, OptionInstance>;
	price: number;
	calories: number;
}
