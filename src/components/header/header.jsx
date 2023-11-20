import './header.scss';
import DamagePerSec from './dps-counter/DamagePerSec';
import CoinsCounter from './coins-counter/CoinsCounter';
import ClicksDamage from './clicks-damage/ClicksDamage';

function Header(props) {
    const user = props.user;
    console.log(user.getDamagePerClicks());

    return (
        <div className="header">
            <DamagePerSec clicks={user.getdamagePerSec()} />
            <CoinsCounter coins={user.getCoins()} />
            <ClicksDamage clicksDamage={user.getDamagePerClicks()} />
        </div>
    )
}

export default Header;