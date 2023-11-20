function CoinsCounter(props) {
    const coins = props.coins;

    return (
        <div>
            <p>Coins</p>
            {coins}
        </div>
    )
}

export default CoinsCounter;