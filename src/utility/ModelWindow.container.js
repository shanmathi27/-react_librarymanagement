import React from 'react';
import { Modal } from 'antd';

const ModelComponent = props => {
  const modalStyle = {
    // Add your custom styles here
    // Example styles:
    backgroundColor: '#FFFACD',
    borderRadius: '8px',
    padding: '10px',
  };

  return (
    <div>
      <Modal
        title="Confirmation"
        visible={props.visible}
        onOk={props.handleOk.bind(this)}
        onCancel={props.handleCancel.bind(this)}
        bodyStyle={modalStyle} // Apply custom styles to the Modal body
      >
        <p>Are you sure you want to add this book to cart?</p>
      </Modal>
    </div>
  );
};

export default ModelComponent;
