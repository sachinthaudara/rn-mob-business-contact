import { atom } from 'recoil';
import { IBusinessCard } from '../../types';

const businessCardListState = atom<IBusinessCard[]>({
  key: 'BusinessCardListState',
  default: [],
});

const selectedBusinessCardState = atom<IBusinessCard | null>({
  key: 'BusinessCardState',
  default: null,
});

export { businessCardListState, selectedBusinessCardState };
