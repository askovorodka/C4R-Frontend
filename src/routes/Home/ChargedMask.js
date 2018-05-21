export const ChargedMask = ({ mask, light}) => {
  const maskPath = 'assets/images/charged-box/'
  return (
    <div className='charging__item__masks'>
      <div className='charging__item__mask'>
        <img src={maskPath + mask} alt='' />
      </div>
      <div className='charging__item__mask2'>
        <img src={maskPath + mask} alt='' />
      </div>
      <div className='charging__item__mask3'>
        <img src={maskPath + mask} alt='' />
      </div>
      <div className='charging__item__light'>
        <img src={maskPath + light} alt='' />
      </div>
      <div className='charging__item__light1'>
        <img src={maskPath + light} alt='' />
      </div>
    </div>
  )
}
