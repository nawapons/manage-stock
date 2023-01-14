import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function insertProduct(req, res) {
    console.log(req.body)
    // try {
    //     const insert = await prisma.tb_product.create({
    //         data: data
    //     });
    //     console.log(insert);
    // } catch (error) {
    //     console.log(error);
    // }
}