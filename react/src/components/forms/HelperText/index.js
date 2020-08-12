/**
 * HelperText module.
 * @module @massds/mayflower-react/HelperText
 * @requires module:@massds/mayflower-assets/scss/01-atoms/helper-text
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HelperText = (props) => (
  <label
    htmlFor={props.inputId}
    aria-labelledby={props.inputId}
    className={classNames('ma__helper-text', {
      'ma__helper-text--disabled': props.disabled,
      'ma__helper-text--error': props.showError
    })}
  >
    {props.message}
  </label>
);

HelperText.propTypes = {
  /** The ID of the corresponding input field */
  inputId: PropTypes.string.isRequired,
  /** The help text for the corresponding input field */
  message: PropTypes.node.isRequired
};

export default HelperText;
