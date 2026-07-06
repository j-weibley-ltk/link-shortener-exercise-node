import { Router } from 'express'
import type { Link } from '@prisma/client'
import { prisma } from '../db'
import { generateCode } from '../services/shortCode'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5000'

export const linksRouter = Router()

linksRouter.post('/', async (req, res) => {
  const { targetUrl } = req.body
  const code = await generateCode()
  const link = await prisma.link.create({
    data: { code, targetUrl },
  })
  res.status(201).json(toResponse(link))
})

linksRouter.get('/', async (_req, res) => {
  const links = await prisma.link.findMany({ orderBy: { createdAt: 'desc' } })
  res.json(links.map(toResponse))
})

linksRouter.get('/:id/clicks', async (_req, res) => {
  // TODO: implement click analytics — see README
  res.status(501).json({ error: 'Not implemented' })
})

function toResponse(link: Link) {
  return {
    id: link.id,
    code: link.code,
    shortUrl: `${BASE_URL}/${link.code}`,
    targetUrl: link.targetUrl,
    createdAt: link.createdAt,
  }
}
