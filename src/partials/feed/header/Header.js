import "./header.css"

const Header = () => {
  return (
    <div className='header'>
       
      <div className='headerWrapper'> 
      <div className="headerTop">
       
        <div className='headerOptions'> 
        <span className='headerText'>Stories</span>
        </div> 
        <div className='headerOptions'> 
        <span className='headerText'>Reels</span>
        </div> 
        <div className='headerOptions'> 
        <span className='headerText'>Rooms</span>
        </div>  
        </div>
        <hr className="headerHr"></hr>
        <div className="headerBottom">
          <div className="headerBottomPartial">
            <img className="headerImg" src="/images/model_1.jpg" alt="model 1"/>
            <img className="headerImg1" src="/images/model_2.png" alt="model 2"/>
          <h5 className="headerImgText1">Create a story</h5>
          </div>  
          <div className="headerBottomPartial">
            <img className="headerImg" src="/images/model_1.jpg" alt="model 1"/>
            <img className="headerImg1" src="/images/model_1.jpg" alt="model 2"/>
          <h5 className="headerImgText2">Mike Hunt</h5>
          </div> 
          <div className="headerBottomPartial">
            <img className="headerImg" src="/images/model_2.png" alt="model 2"/>
            <img className="headerImg1" src="/images/model_2.png" alt="model 2"/>
          <h5 className="headerImgText3">Stefany Rogers</h5>
          </div> 
          <div className="headerBottomPartial">
            <img className="headerImg" src="/images/model_3.jpg" alt="model 3"/>
            <img className="headerImg1" src="/images/model_3.jpg" alt="model 3"/>
          <h5 className="headerImgText4">Gwen Stacy</h5>
          </div>
          <div className="headerBottomPartial">
            <img className="headerImg" src="/images/model_4.png" alt="model 4"/>
            <img className="headerImg1" src="/images/model_4.png" alt="model 4"/>
          <h5 className="headerImgText5">Random WolfPerson</h5>
          </div>
        </div>
       
       
       
      </div>
        
    </div>
  )
}

export default Header
