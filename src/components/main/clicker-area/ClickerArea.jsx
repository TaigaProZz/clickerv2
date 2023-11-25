import './ClickerArea.scss';
import Header from './header/Header';

function ClickerArea() {
  const mob = {
    name: 'Mob',
    hp: 100
  }

  return (
    <div className='clicker-area-container'>
      <Header mob={mob} />
      <div className='clicker-area-click'>
        <div className='mob-background'>
          <img src='/images/mobs/psykokwak.png' className='mob-image' />
        </div>
      </div>
    </div>
  )
}

export default ClickerArea;