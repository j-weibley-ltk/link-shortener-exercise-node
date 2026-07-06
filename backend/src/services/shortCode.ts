import { prisma } from '../db'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const CODE_LENGTH = 7

function randomCode(): string {
  let code = ''
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  }
  return code
}

export async function generateCode(): Promise<string> {
  let code = randomCode()
  while (await prisma.link.findFirst({ where: { code } })) {
    code = randomCode()
  }
  return code
}
