import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../index'
import { generateCode } from '../services/shortCode'

describe('POST /api/links', () => {
  it('creates a link', async () => {
    const res = await request(app)
      .post('/api/links')
      .send({ targetUrl: 'https://example.com' })

    expect(res.status).toBe(201)
  })
})

describe('generateCode', () => {
  it('returns a code of the expected length', async () => {
    const code = await generateCode()

    expect(code).toBeTruthy()
    expect(code).toHaveLength(7)
  })
})
