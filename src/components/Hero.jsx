import { logo } from '../assets'
const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">

            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="summarAIze" className="w-28 object-contain" />

                <button type='button' onClick={() => window.open('https://github.com/Md-Nur/SummarAIze')} className='black_btn'>Github</button></nav>
            <h1 className="head_text">
                SummarAIze <br className='max-md:hidden' />
                <span className="orange_gradient">Your AI-powered text summarization</span>
            </h1>
        </header>

    )
}

export default Hero