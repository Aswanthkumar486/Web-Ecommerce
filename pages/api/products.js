import data from '../../data/data.json'

export default function handler(req,res) {
    const {id} =req.query;
    if (id) {
        
        const product =data.products.find(
            (item)=> item.id == id
         )
    
    if (!product) {
      return res.status(404).json({ error: "Product not found 😢" });
    }

    return res.status(200).json(product);

}
  res.status(200).json(data.products);
}