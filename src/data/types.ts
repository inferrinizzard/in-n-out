import type Menu from "./menu";

export type SkuId = keyof typeof Menu;

export type MenuItem<Id extends SkuId = SkuId> = (typeof Menu)[Id];
