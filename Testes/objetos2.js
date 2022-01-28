const usuario = {
    nome: 'Leo',
    idade: 26,
    cidade: 'Mogi',
};

const isOldThan26 = 20 > 26;
const value = isOldThan26 && 'heitor';


const status2 = false 
    ? 'reproved'
    : 'inprocess'

// deep clone
const usuarioTst = {
    ...usuario,
    nome: 'heitor',
    status2
};
console.log(Object.keys(usuarioTst).reduce((agg, curr) => `+${agg}${curr}`, ''));
