const url = 'http://localhost:4000/DunderMifflin/sales'

class SalesModel {
  static create(newSale) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSale)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in SaleModel.create', err);
      return { sale: {} };
    });
  }
}

export default SalesModel;