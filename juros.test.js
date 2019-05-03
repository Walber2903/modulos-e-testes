const api = require('./juros')

test('jurosSimples', () => {
    const valor = api.jurosSimples(10, 0.1, 12)

    expect(valor).toBe(12)
})

test('montanteComJurosSimples', () => {
    const c = 10
    const i = 0.1
    const t = 12
    const montanteEsperado = 22
    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 12)
    const montanteComJurosSimples = api.pure.montanteComJurosSimples({jurosSimples}) 
    const montante = montanteComJurosSimples(c, i, t)
    console.log('montante', montante)
    expect(jurosSimples.mock.calls[0]).toEqual([c, i, t])
    expect(montante).toBe(montanteEsperado) 
})

test('montanteComJurosComposto', () => {
    const c = 1000
    const i = 0.1
    const t = 1
    const jurosEsperados = 1100
    const jurosCalc = api.montanteComJurosComposto(c, i, t)
    expect(jurosCalc).toBe(jurosEsperados)
})

test('jurosComposto', () => {
    const c = 1000
    const i = 0.1
    const t = 1

    const montanteComJurosComposto = jest.fn()
    montanteComJurosComposto.mockImplementation(() => 1100)

    const jurosComposto = api.pure.jurosComposto({montanteComJurosComposto})
    const jurosCalc = jurosComposto(c, i, t)

    expect(montanteComJurosComposto.mock.calls[0]).toEqual([c, i, t])
    expect(jurosCalc).toBe(100)
})