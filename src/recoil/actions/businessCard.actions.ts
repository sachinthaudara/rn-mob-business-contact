import { IBusinessCard } from '../../types';
import { businessCardsState } from '../state';

const addBusinessCardAction =
  ({ snapshot, set }) =>
  async (payload: IBusinessCard) => {
    // #0d6aff
    // #4dffd5
    // #f86eff
    // #fffd6e
    // #ff906e
    const currentState = await snapshot.getPromise(businessCardsState);
    set(businessCardsState, [...currentState, payload]);
  };

const deleteBusinessCardAction =
  ({ snapshot, set }) =>
  async (payload: IBusinessCard) => {
    const currentState = await snapshot.getPromise(businessCardsState);
    const oldState = [...currentState];
    const newState = oldState.filter(element => payload.id !== element.id);

    set(businessCardsState, [newState]);
  };

export { addBusinessCardAction, deleteBusinessCardAction };
