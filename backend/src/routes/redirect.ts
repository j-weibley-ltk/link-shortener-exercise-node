import { Router } from 'express'
import { prisma } from '../db'

export const redirectRouter = Router()

redirectRouter.get('/:code', async (req, res) => {
  const link = await prisma.link.findFirst({ where: { code: req.params.code } })
  if (!link) {
    res.status(404).send('Not found')
    return
  }

  await prisma.click.create({ data: { linkId: link.id } })

  res.redirect(302, link.targetUrl)
})
