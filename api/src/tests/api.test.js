import supertest from 'supertest'
import chai from 'chai'
import server from '../server'

const expect = chai.expect
const request = supertest(server.app)

describe('GET /iecho', async () => {
  it('Debería retornar un código de estado HTTP 200 y palindrome en falso', async () => {
    const response = await request.get('/iecho?text=palabra')

    expect(response.status).to.eql(200)
    expect(response.body.text).to.eql('arbalap')
    expect(response.body.palindrome).to.eql(false)
  })
})

describe('GET /iecho', async () => {
  it('Debería retornar un código de estado HTTP 200 y palindrome en verdadero', async () => {
    const response = await request.get('/iecho?text=solos')

    expect(response.status).to.eql(200)
    expect(response.body.text).to.eql('solos')
    expect(response.body.palindrome).to.eql(true)
  })
})

describe('GET /iecho', async () => {
  it('Debería retornar un código de estado HTTP 400 y la propiedad text igual a "no text"', async () => {
    const response = await request.get('/iecho')

    expect(response.status).to.eql(400)
    expect(response.body.text).to.eql('no text')
  })
})

describe('GET /iecho', async () => {
  it('Debería retornar un código de estado HTTP 400 y la propiedad text igual a "no text"', async () => {
    const response = await request.get('/iecho?text=')

    expect(response.status).to.eql(400)
    expect(response.body.text).to.eql('no text')
  })
})
