import type Menu from './menu';

import { type ValueOf } from '../types/util';

export type SkuId = keyof typeof Menu;

export type MenuItem = ValueOf<typeof Menu>;
