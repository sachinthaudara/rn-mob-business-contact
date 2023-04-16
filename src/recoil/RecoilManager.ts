import { setRecoil } from 'recoil-nexus';
import EncryptedStorage from 'react-native-encrypted-storage';
import { businessCardListState } from './state';
import { kBusinessCardList } from '../constants';

const rehydrateBusinessCardList = async () => {
  let cachedBusinessCardList = [];

  try {
    const businessCardList = await EncryptedStorage.getItem(kBusinessCardList);
    if (!businessCardList) {
      cachedBusinessCardList = [];
    } else {
      cachedBusinessCardList = JSON.parse(businessCardList);
    }
    setRecoil(businessCardListState, cachedBusinessCardList);
  } catch (error) {
    setRecoil(businessCardListState, cachedBusinessCardList);
  }
};

export const rehydrateRecoil = async () => {
  return Promise.all([rehydrateBusinessCardList()])
    .then(() => {
      console.log('rehydrate recoil state success');
    })
    .catch(error => {
      console.error('rehydrate Recoil failed due error', error);
    });
};
