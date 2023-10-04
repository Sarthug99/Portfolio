import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow ' onClick={toggleModal}>
        <div className='img'>
          <img src={props.image} alt=''  />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>DESCRIPTION</span>
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
              <p>{props.desc2}</p>
              <p>{props.desc3}</p>
              <div className='button f_flex mtop'>
                <a href={props.link} target="_blank">

                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
                </a>
              </div>
              <button className='close-modal  close_btn_shadow' onClick={toggleModal}>
                <CloseIcon fontSize="medium"/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
