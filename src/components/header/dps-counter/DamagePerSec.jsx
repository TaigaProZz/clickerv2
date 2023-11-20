function DamagePerSec (props) {
    const clicks = props.clicks;

    return (
        <div className="flex-d">
            <p>Clicks per seconds</p>
            {clicks}
        </div>
    )

}

export default DamagePerSec;