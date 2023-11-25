import ItemContainer from "../item-container/ItemContainer";

function ClicksDamage({clicksDamage}) {

  return (
    <div className="flex-d">
      <ItemContainer image={'/images/le-curseur.png'} name={`Damage per clicks : ${clicksDamage}`} />
    </div>
  )
}

export default ClicksDamage;