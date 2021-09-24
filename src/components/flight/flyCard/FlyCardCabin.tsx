

const FlyCardCabin = ({
  cabinId,
  cabinList,
  handleCabin
}) => {
  return (
    <section className='fly-card__cabin mt-20' onClick={handleCabin}>
      {cabinList[cabinId]}
    </section>
  )
}


export default FlyCardCabin