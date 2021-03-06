const router = require('express').Router();
const controller = require('../controllers/products');


router.get("/products", controller.get_products)
router.post("/products", controller.add_product)
router.patch("/products/:id", controller.patch_product)
router.put("/products/:id", controller.edit_product)
router.delete("/products/:id", controller.delete_product)
// router.get("/api/products/:id", controller.get_product)

module.exports = router;
router.get("/recipes/shoppinglist?ids", controller.list)
