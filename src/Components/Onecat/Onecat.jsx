import './Onecat.css'

function Onecat(props){
    return(
        <div className='maincat' style={{backgroundColor:props.CatColor}}>
            <div className='upper'  style={{backgroundColor:props.CatColor, 
                backgroundImage: "url(${props.CatLogo})", backgroundRepeat:"no-repeat", backgroundSize: "contain"}}>
                <img className='catlogo' src={props.CatLogo} />
            </div>
            <div className='lower'>
                <div className='uplower'>
                    <label className='catname'>{props.CatName}</label>
                    <label className='dots'>...</label>
                </div>
                <div className='lowlower'>
                    <label className='catduration'>{props.CatDuration}</label>
                    <label className='catdate'>{props.CatDate}</label>
                </div>
            </div>
        </div>
    )

}

export default Onecat