import './header.scss';
import ClicksCounter from './clicks-counter/ClicksCounter';
import CoinsCounter from './coins-counter/CoinsCounter';

function Header(props) {
    const user = props.user;
    console.log(user.getName());

    return (
        <div className="header">
            <ClicksCounter clicks={user.getClicksPerSec()} />
            <CoinsCounter coins={user.getCoins()}/>
        </div>
    )
}

export default Header;