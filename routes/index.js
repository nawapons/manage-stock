var express = require('express');
var router = express.Router();
const moment = require('moment-timezone');
const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient()

var dateNow = moment.utc().tz('Asia/Bangkok').toISOString();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/product", async (req, res) => {
  try {
    const product = await prisma.tb_product.findMany();
    res.status(200).render('product', { data: {}, products: product });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Router POST
router.post("/product", async (req, res) => {
  try {
    res.body = await prisma.tb_product.create({
      data: {
        barcode: req.body.barcode,
        name: req.body.name
      }
    });
    res.status(200).redirect("product");
  } catch (err) {
    res.status(500).send(err);
  }
})
router.post("/productEdit/:id", async (req, res) => {
  const id = [+req.params.id, req.body.barcode, req.body.name]
  try {
    const update = await prisma.tb_product.update({
      where: { id: id[0] },
      data: {
        barcode: id[1],
        name: id[2]
      }
    })
    res.status(200).redirect("/product");
  } catch (err) {
    res.status(500).send(err);
  }
})
router.post('/searchProduct', async (req, res) => {
  const barcode = req.body.barcode;
  try {
    const search = await prisma.tb_product.findMany({
      where: { barcode: barcode },
    })
    res.status(200).json(search);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
})
router.post('/importStock', async (req, res) => {
  try {
    const insert = await prisma.tb_import_stock.create({
      data: {
        product_id: +req.body.product_id,
        qty: +req.body.qty,
        import_date: dateNow,
      }
    })
    res.status(200).redirect("importStockSuccess");
  } catch (err) {
    res.status(500).send(err)
  }
})
router.post('/outStock', async (req, res) => {
  try {
    const insert = await prisma.tb_outstock.create({
      data: {
        product_id: +req.body.product_id,
        qty: +req.body.qty,
        outdate: dateNow,
      }
    })
    res.status(200).redirect("outStockSuccess");
  } catch (err) {
    res.status(500).send(err)
  }
})
router.post('/report', async (req, res) => {
  let from = req.body.from + ' 00:00';
  from = from.replace('/', '-');
  let to = req.body.to + ' 23:59';
  to = to.replace('/', '-');

  try {
    const products = await prisma.$queryRaw`SELECT tb_product.barcode,tb_product.name,
      ( SELECT SUM(qty) FROM tb_import_stock
        WHERE (import_date BETWEEN ${from} AND ${to})
        AND product_id = tb_product.id
      ) AS total_import,
      ( SELECT SUM(qty) FROM tb_outstock
        WHERE (outdate BETWEEN ${from} AND ${to})
        AND product_id = tb_product.id
      ) AS total_out FROM tb_product`
    let data = { from: req.body.from, to: req.body.to, products: products };
    res.status(200).render('reportStock', data);
  } catch (err) {
    res.status(500).send(err)
    console.log(err);
  }

})
// Router GET
router.get('/productDelete/:id', async (req, res) => {
  const id = +req.params.id;
  try {
    const product = await prisma.tb_product.delete({
      where: { id: id }
    })
    res.status(200).redirect("/product");
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
})
router.get('/importStockSuccess', (req, res) => {
  res.render('importStockSuccess');
})
router.get('/outStockSuccess', (req, res) => {
  res.render('outStockSuccess');
})
router.get('/productEdit/:id', async (req, res) => {
  const id = +req.params.id;
  try {
    const productEdit = await prisma.tb_product.findUnique({
      where: { id: id }
    })
    const products = await prisma.tb_product.findMany();
    res.status(200).render('product', { data: productEdit, products: products });
  } catch (err) {
    res.status(500).send(err);
  }
})
router.get('/importStock', (req, res) => {
  res.render('importStock');
})
router.get('/outStock', (req, res) => {
  res.render('outStock');
})
router.get('/report', (req, res) => {
  let data = { from: '', to: '', products: [] };
  res.render('reportStock', data);
})
module.exports = router;
