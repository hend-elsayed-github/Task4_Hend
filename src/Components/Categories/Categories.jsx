import './Categories.css'
import Onecat from '../../Components/Onecat/Onecat'
import workicon from '../../assets/images/icon-work.svg'
import playicon from '../../assets/images/icon-play.svg'
import studyicon from '../../assets/images/icon-study.svg'
import exerciseicon from '../../assets/images/icon-exercise.svg'
import socialicon from '../../assets/images/icon-social.svg'
import selficon from '../../assets/images/icon-self-care.svg'

function Categories(){
    const myarray = [
        {
            CatLogo:workicon,
            CatName: 'Work',
            CatDuration: '32hrs',
            CatDate:'Last Week-36hrs',
            Pos:1,
            CatColor: 'hsl(15, 100%, 70%)'
        },

        {
            CatLogo:playicon,
            CatName: 'Play',
            CatDuration: '10hrs',
            CatDate:'Last Week-8hrs',
            Pos:2,
            CatColor: 'hsl(195, 74%, 62%)'
        },

        {
            CatLogo:studyicon,
            CatName: 'Study',
            CatDuration: '4hrs',
            CatDate:'Last Week-7hrs',
            Pos:3,
            CatColor: 'hsl(348, 100%, 68%)'
        },

        {
            CatLogo:exerciseicon,
            CatName: 'Exercise',
            CatDuration: '4hrs',
            CatDate:'Last Week-5hrs',
            Pos:4,
            CatColor:'hsl(145, 58%, 55%)'
        },

        {
            CatLogo:socialicon,
            CatName: 'Social',
            CatDuration: '5hrs',
            CatDate:'Last Week-10hrs',
            Pos:5,
            CatColor:'hsl(264, 64%, 52%)'
        },

        {
            CatLogo:selficon,
            CatName: 'Self Care',
            CatDuration: '2hrs',
            CatDate:'Last Week-2hrs',
            Pos:6,
            CatColor:'hsl(43, 84%, 65%)'
        },
    ];
    return(
        <div id='cat'>
            {
                myarray.map((item)=>{
                    return(
                        <Onecat CatLogo={item.CatLogo}  CatName={item.CatName}
                        CatDuration={item.CatDuration}  CatDate={item.CatDate}
                        CatColor={item.CatColor}  key={item.Pos}>
                        </Onecat>
                    
                );
            }
            )
            }
        </div>
    )
}

export default Categories