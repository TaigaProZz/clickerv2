function ClicksDamage (props) {
    const clicksDamage = props.clicksDamage;

    return (
        <div className="flex-d">
            <p>Damage per clicks</p>
            {clicksDamage}
        </div>
    )
}

export default ClicksDamage;