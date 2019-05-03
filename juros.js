const jurosSimples = (c, i, t) => {
    return c * i * t
}

const montanteComJurosSimples = ({jurosSimples}) => (c, i, t) => {
    return c + jurosSimples(c, i, t)
}

const montanteComJurosComposto = (c, i, t) => {
    return c * Math.pow((1 + i), t)
}

const jurosComposto = ({montanteComJurosComposto}) => (c, i, t) => {
    return montanteComJurosComposto(c, i, t) - c
}

module.exports = {
    jurosSimples,
    montanteComJurosSimples: montanteComJurosSimples({jurosSimples}),
    montanteComJurosComposto,
    JurosComposto: jurosComposto({montanteComJurosComposto}),
    pure: {
        montanteComJurosSimples,
        jurosComposto
    }
}