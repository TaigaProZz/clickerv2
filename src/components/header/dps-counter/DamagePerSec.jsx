import ItemContainer from '../item-container/ItemContainer';

function DamagePerSec({clicks}) {

	return (
		<div className="flex-d">
			<ItemContainer image={'/images/damage.png'} name={`Clicks per seconds : ${clicks}`}/>
		</div>
	)
}

export default DamagePerSec;