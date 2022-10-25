import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static = {
    onClose: PropTypes.func,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('keydown');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop className="modal-backdrop" onClick={this.props.onClose}>
        <ModalContent className="modal-content">
          {this.props.children}
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
