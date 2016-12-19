import constants from '../constants';

export const setFeatureState = (featureKey, featureState) => {
    return {
        type: constants.SET_FEATURE_STATE,
        payload: {
                featureKey,
                featureState
            }
    };
}