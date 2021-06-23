import { SubIntro } from './SubIntro'
import '../styles/intro.css'


export const Intro = () => {

    return (
        <>
            <section className="intro">
                <h2 className="intro__title">
                    <span>A</span>
                    <span>p</span>
                    <span>r</span>
                    <span>i</span>
                    <span>l&nbsp;&nbsp;</span>
                    <span>L</span>
                    <span>i</span>
                    <span>m</span>
                    <span>a</span>
                    <span>s</span>
                </h2>
                <SubIntro />
            </section>
        </>
    )
}