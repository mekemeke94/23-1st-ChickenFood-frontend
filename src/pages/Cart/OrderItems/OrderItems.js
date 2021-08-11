import React from 'react';
import './OrderItems.scss';

class OrderItems extends React.Component {
  render() {
    const {
      id,
      itemNum,
      plusBtn,
      minusBtn,
      itemName,
      itemImg,
      total,
      deleteList,
    } = this.props;
    return (
      <div className="orderItems">
        <div className="orderItemsLeft">
          <img className="itemImg" src={itemImg} alt="item" />
          <div className="itemText">
            <div className="itemName">{itemName}</div>
            <div className="itemOption">
              수량:{' '}
              <button
                className="quantityBtn"
                name={id}
                onClick={itemNum === 1 ? null : minusBtn}
              >
                -
              </button>{' '}
              {itemNum}개
              <button className="quantityBtn" name={id} onClick={plusBtn}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="orderItemsRight">
          <button className="closeBtn" onClick={() => deleteList(id)}></button>
          <div className="itemPrice">\{total}</div>
        </div>
      </div>
    );
  }
}

export default OrderItems;
