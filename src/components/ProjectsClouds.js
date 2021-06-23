import aboutCloud1 from '../images/about-cloud1.png'
import aboutCloud2 from '../images/about-cloud2.png'
import aboutCloud3 from '../images/about-cloud3.png'
import aboutCloud4 from '../images/about-cloud4.png'
import aboutCloud5 from '../images/about-cloud5.png'
import '../styles/projects-clouds.css'

export const ProjectsClouds = () => {

    return (
        <>  
            <div className="about-clouds">
                <img src={aboutCloud1} alt='' style={{'--i':1}}></img>
                <img src={aboutCloud2} alt='' style={{'--i':2}}></img>
                <img src={aboutCloud3} alt='' style={{'--i':3}}></img>
                <img src={aboutCloud4} alt='' style={{'--i':4}}></img>
                <img src={aboutCloud5} alt='' style={{'--i':5}}></img>
                <img src={aboutCloud1} alt='' style={{'--i':10}}></img>
                <img src={aboutCloud2} alt='' style={{'--i':9}}></img>
                <img src={aboutCloud3} alt='' style={{'--i':8}}></img>
                <img src={aboutCloud4} alt='' style={{'--i':7}}></img>
                <img src={aboutCloud5} alt='' style={{'--i':6}}></img>
            </div>
        </>
    )
}