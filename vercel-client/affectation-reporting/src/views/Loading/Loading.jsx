import React from 'react'
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={style.block_view}>
        <h1>LOADING...</h1>
        <div className={style.lds_ripple}><div></div><div></div></div>
    </div>
  )
}

export default Loading