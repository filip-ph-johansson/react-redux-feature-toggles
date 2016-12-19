import constants from '../constants';

export const setFeatureState = (featureKey, state) => {
    return {
        type: constants.SET_FEATURE_STATE,
        payload: {
                featureKey,
                state
            }
    };
}