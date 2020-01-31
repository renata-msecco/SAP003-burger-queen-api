import models from '../server/src/models'

const getAll = async (req, res) => {
    const products = await models.Products.findAll()
    res.send(products)
};
export default {
    getAll
}