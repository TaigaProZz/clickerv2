function CoinsCounter(props) {
    const coins = props.coins;

    return (
        <div className="flex-d">
            <p>Coins</p>
            {coins}
        </div>
    )
}

export default CoinsCounter;