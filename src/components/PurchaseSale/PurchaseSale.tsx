import React, { FC, ReactNode, useState } from "react";
import './PurchaseSale.scss'
import store from '../../img/Gift.svg';
import close from '../../img/close.svg'
import GoldInput from "../../shared/inputs/GoldInput/GoldInput";
import CardHolder from '../../shared/cardHolder/CardHolder'
import CardAdder from '../../shared/cardAdder/CardAdder'
import GoldButton from "../../shared/buttons/GoldButton";
import Modal from "../../shared/modal/Modal";

interface PurchaseSaleProps {
  setOpenPurchStatus: Function;
}

const PurchaseSale:FC<PurchaseSaleProps> = ({setOpenPurchStatus}) => {
  const closeSideBar = () => {
    setOpenPurchStatus(false)
  }

  const [buy, setBuy] = useState(true);
  const [sale, setSale] = useState(false);
  
  return (
      <div className="PurchaseSale-overlay" onClick={closeSideBar}>
        <div onClick={(e) => e.stopPropagation()} className="PurchaseSale-box">
          <div className="PurchaseSaleTitle">
            <img src={store} alt="Магазин" />
            <h2 className="title-25 semibold">Магазин</h2>
            <button onClick={closeSideBar}>
                <img src={close} alt="Закрыть" />
            </button>
          </div>
          <div className="PurchaseSaleButton">
            <button className='title-18 medium' onClick={() => {setBuy(true); setSale(false)}}>Купить</button>
            <button className='title-18 medium' onClick={() => {setBuy(false); setSale(true)}}>Продать</button>
          </div>
          <Modal visible={buy} setVisible={setBuy}>
              <GoldInput/>
                <div className="PurchaseSaleCards">
                  <h4 className="text-14 regular">Выберите карту</h4>
                  <CardHolder />
                  <CardAdder />
                </div>
              <GoldButton text='Купить'/>
          </Modal>
          <Modal visible={sale} setVisible={setSale}>
              <GoldInput/>
                <div className="PurchaseSaleCards">
                  <h4 className="text-14 regular">Выберите карту</h4>
                  <CardHolder />
                  <CardAdder />
                </div>
              <GoldButton text='Продать'/>
          </Modal>
        </div>
      </div>
  );
};

export default PurchaseSale;