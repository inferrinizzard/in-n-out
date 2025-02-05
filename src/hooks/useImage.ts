import { ImageData, ImageUris } from "@src/data/images";
import type { SkuId } from "@data/types";

export const useImage = (id: SkuId) => {
	if (id in ImageData) {
		return ImageData[id as keyof typeof ImageData];
	}

	return ImageUris[id];
};
