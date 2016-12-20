import constants from '../constants';
import statePersister from '../statePersister';

export const setFeatureState = (featureKey, featureState) => {
    statePersister.persistFeatureState(featureKey, featureState);    
    return {
        type: constants.SET_FEATURE_STATE,
        payload: {
                featureKey,
                featureState
            }
    };
}