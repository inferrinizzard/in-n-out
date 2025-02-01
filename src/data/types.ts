import type Menu from "./old/menu";

export type SkuId = keyof typeof Menu;

export type MenuItem<Id extends SkuId = SkuId> = (typeof Menu)[Id];
