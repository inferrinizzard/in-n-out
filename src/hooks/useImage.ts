import { useAppSelector } from '@src/redux/store';
import { selectImageUris, selectImages } from '@src/redux/slices/dataSlice';

import { type SkuId } from '@src/data/types';

export const useImage = (id: SkuId) => {
  const images = useAppSelector(selectImages);
  const imageUris = useAppSelector(selectImageUris);

  if (id in images) {
    return images[id as keyof typeof images];
  }

  return imageUris[id];
};
