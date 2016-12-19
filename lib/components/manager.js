'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = function (_React$Component) {
    _inherits(Manager, _React$Component);

    function Manager(props) {
        _classCallCheck(this, Manager);

        var _this = _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this, props));

        _this.renderFeatureRows = _this.renderFeatureRows.bind(_this);
        _this.onCheckedChanged = _this.onCheckedChanged.bind(_this);
        return _this;
    }

    _createClass(Manager, [{
        key: 'onCheckedChanged',
        value: function onCheckedChanged(e, featureKey) {
            this.props.setFeatureState(featureKey, e.target.checked);
        }
    }, {
        key: 'renderFeatureRows',
        value: function renderFeatureRows() {
            var _this2 = this;

            var featureToggles = this.props.featureToggles;

            return Object.keys(featureToggles).map(function (key) {
                var featureState = featureToggles[key];
                return _react2.default.createElement(
                    'tr',
                    { key: key },
                    _react2.default.createElement(
                        'td',
                        null,
                        key
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('input', { type: 'checkbox', checked: featureState, onChange: function onChange(e) {
                                _this2.onCheckedChanged(e, key);
                            } })
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'Feature'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'State'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.renderFeatureRows()
                )
            );
        }
    }]);

    return Manager;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        featureToggles: state.featureToggles
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setFeatureState: _actions.setFeatureState
    }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Manager);