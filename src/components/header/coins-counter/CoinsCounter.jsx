import ItemContainer from "../item-container/ItemContainer";

function CoinsCounter({coins}) {

	return (
		<div className="flex-d">
			<ItemContainer image={'/images/coins.png'} name={`Coins : ${coins}`}/>
		</div>
	)
}

export default CoinsCounter;