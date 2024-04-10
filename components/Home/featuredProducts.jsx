import Card from "../cards/Card"

const FeaturedProducts = () => {
  return (
    <>
      {filteredCardData.length > 0 ? (
        <Card cardData={filteredCardData} />
      ) : (
        <p style={{ fontSize: '18px', fontWeight: '700'}}>No items found :(</p>
      )}
    </>
  )
}

export default FeaturedProducts;
