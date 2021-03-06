// Actions
import { uiActions } from '../actions';

describe('profile actions:', () => {
    test('startFetching', () => {
        expect(uiActions.startFetching()).toMatchSnapshot();
    });

    test('stopFetching', () => {
        expect(uiActions.stopFetching()).toMatchSnapshot();
    });

    test('setOnlineState', () => {
        expect(uiActions.setOnlineState()).toMatchSnapshot();
    });

    test('setOfflineState', () => {
        expect(uiActions.setOfflineState()).toMatchSnapshot();
    });

    test('emitError', () => {
        expect(uiActions.emitError(__.error, void 0)).toMatchSnapshot();
    });
});
