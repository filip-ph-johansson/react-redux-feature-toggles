import React from 'react';
import { connect } from 'react-redux';
import { setFeatureState } from './actions';
import { bindActionCreators } from 'redux';

class Manager extends React.Component {
    constructor(props) {
        super(props);

        this.renderFeatureRows = this.renderFeatureRows.bind(this);
        this.onCheckedChanged = this.onCheckedChanged.bind(this);
    }

    onCheckedChanged(e, featureKey) {
        this.props.setFeatureState(featureKey, e.target.checked);
    }

    renderFeatureRows(){
        const { featureToggles } = this.props;
        return Object.keys(featureToggles).map((key) => {
            const featureState = featureToggles[key];
            return (
                <tr key={key}>
                    <td>
                        {key}
                    </td>
                    <td>
                        <input type="checkbox" checked={featureState} onChange={(e) => { this.onCheckedChanged(e, key); }} />
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Feature
                        </th>
                        <th>
                            State
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderFeatureRows()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => ({
    featureToggles: state.featureToggles
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setFeatureState
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
