import './Leftcomp.css'
import Jeremy from '../../assets/images/image-jeremy.png'

function Leftcomp(){
    return(
        <div id='leftdiv'>
            <div id='upperleft'>
                <img id='personalimage'  src={Jeremy}/>
                <div id='namediv'>
                    <label id='report'>Report for </label>
                    <label id='username'>Jeremy Robson</label>
                </div>
            </div>
            <div id='lowerleft'>
                <label className='duration'>Daily</label>
                <label className='duration' id='weekly'>Weekly</label>
                <label className='duration'>Monthly</label>
            </div>
        </div>
    )
}

export default Leftcomp