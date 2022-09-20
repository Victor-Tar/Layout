import './App.css';
import Logo from './assets/Logo.svg'
import Section from './components/Section/Section';
import Palette from './components/Palette/Palette';

function App() {

  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header'>
          <a href='#'>
            <img src={Logo} alt='company logo' />
          </a>
        </header>

        <main>
          <div className='container'>
            <div className='container_title'>2. Add content to the PDF QR Code</div>
            <button className='container_help'>
              <div className='container_help-question'>?</div>
              Help
            </button>
          </div>

          <Section title='Name your QR code*' padding='big'>
            <input type='text' placeholder='e.g. My QR code' />
          </Section>

          <Section 
            title='Choose your color scheme' 
            padding='small' 
            isSpoiler
          >
            <Palette />
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
