
const Fees = ({fees}) => {
  const [networkFee, c14Fee, totalFee] = fees;
    return(
        <div className='Fees'>
        <div className='fees-header'>Fees</div>
        
        <div className='FeesCard'>
          <div className='FeeBlock'>
            <div className='block-header'>Network Fee</div>
            <div className='block-content'>{`${networkFee}$`}</div>
          </div>
          <div className='plus-sign'>+</div>
          <div className='FeeBlock'>
            <div className='block-header'>C14 Fee</div>
            <div className='block-content'>{`${c14Fee}$`}</div>
          </div>
          <div className='equal-sign'>=</div>
          <div className='FeeBlock total'>
            <div className='block-header'>Total Fee</div>
            <div className='block-content'>{`${totalFee}$`}</div>
          </div>
        </div>
      </div>
    )
}

export default Fees;