import { ImageData } from "@src/data/images";

export const getImage = (id: string) => {
	if (id in ImageData) {
		return ImageData[id as keyof typeof ImageData];
	}

	return "";
};
