import EncryptedStorage from 'react-native-encrypted-storage';
import { IBusinessCard } from '../../types';
import { businessCardListState } from '../state';
import { kBusinessCardList } from '../../constants';

const addBusinessCardAction =
  ({ snapshot, set }) =>
  async (payload: IBusinessCard) => {
    const currentState = await snapshot.getPromise(businessCardListState);
    const newState = [...currentState, payload];
    set(businessCardListState, newState);
    await EncryptedStorage.setItem(kBusinessCardList, JSON.stringify(newState));
  };

const deleteBusinessCardAction =
  ({ snapshot, set }) =>
  async (payload: IBusinessCard) => {
    const currentState = await snapshot.getPromise(businessCardListState);
    const oldState = [...currentState];
    const newState = oldState.filter(element => payload.id !== element.id);

    set(businessCardListState, newState);
    await EncryptedStorage.setItem(kBusinessCardList, JSON.stringify(newState));
  };

export { addBusinessCardAction, deleteBusinessCardAction };
