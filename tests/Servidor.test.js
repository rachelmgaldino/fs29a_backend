// npm install axios
const Api = require('./Api')
test('Testando Servidor', () => {
    Api.get('/')
    .then((response) => {
        expect(response.data).toBe('Hello Backend')
    })
    .catch((error) => {
        console.error(error)
    })
})