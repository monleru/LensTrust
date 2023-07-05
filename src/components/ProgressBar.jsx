import Progress from '@delowar/react-circle-progressbar';
import React,{useState} from 'react';

const ProgressBar = () => {
    const [progress,setProgress] = useState(100)
    return(
        <div>
            <Progress 
                className={'test'}
                size={220}
                isGradient 
                gradient={{
                    angle: 160,
                    startColor: '#ff0000',
                    stopColor: '#42FF00'
                }}
                percent={75/100*progress}
                borderWidth={30}
                borderBgWidth={20}
                emptyColor={'none'}
                transition={2000}
            >      
                <div className='brogress-bar-in-div'>
                    <img src={require('../assets/images/logo-green.png')} alt="" />
                    <p style={{textAlign: 'center',fontSize: '50px',margin: 0,fontWeight: 600}}>985</p>
                </div>
            </Progress>
        </div>
    )
}

export default ProgressBar;