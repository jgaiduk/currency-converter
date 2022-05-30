const Footer = () => {
    return(
        <div className='Footer'>
        <div className='QR_Block'>
          <img className='qr-img' src={require('../assets/qr.png')}></img>
          <div>
          <div className='block-header'>Destination Address</div>
          <div>msWZQGyzYiCL3VPw1ajHkXcF9nRo9V2vsc</div>
         </div>
        </div>
        <div className='Time_Block'>
        <img className='clock-img' src={require('../assets/clock.png')}></img>
        <div>
          <div className='block-header'>Average Processing Time</div>
          <div>4 Minutes</div>
         </div>
        </div>
    </div>
    )
}

export default Footer;