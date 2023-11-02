import { PrismaClient } from '@prisma/client';
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();
router.get('/solicituddeservicio',async (req, res) => {
    const solicitudes=await prisma.solicitudServicio.findMany();
    res.json(solicitudes);
});

router.post('/solicituddeservicio', async (req, res) => {
    const newsolicitud=await prisma.solicitudServicio.create({
    data: req.body
    });
    res.json(newsolicitud);
})
export default router;