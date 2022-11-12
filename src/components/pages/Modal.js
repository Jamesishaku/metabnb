import React from 'react'
import './modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import dog from '../../assets/dog.svg'
import hot from '../../assets/hot.svg'

const Modal = ({ open, onClose }) => {
    if(!open) return null
  return (
      <div className='overlay' onClick={onClose}>
          <div className='modalContainer' onClick={(e) => {
            //   avoid further propagating the onclick event 
                e.stopPropagation();
            }}>
              <div className="modalHeader">
                  <h3>Connect wallet</h3>
                  {/* close button icon  */}
                  <p className='closeBtn' onClick={onClose}><AiOutlineClose /></p>
              </div>
              <form>
                  <label>Choose your preferred wallet:</label>
                  <button><span><img src={ dog } alt="dog"/>Metamask</span> <FiChevronRight /></button>
                  <button><span><img src={ hot } alt="hot"/>WalletConnect</span><FiChevronRight /></button>
              </form>
          </div>
    </div>
  )
}

export default Modal