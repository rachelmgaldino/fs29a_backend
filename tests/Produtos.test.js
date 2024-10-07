const Api = require('./Api');

test("Criando Novo Usuario", () => {
    const data = {
        name: 'Admin',
        login: 'admin',
        password: '123'
    }
    Api.post('usuarios', data)
    .then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.message).toBe('Usuario criado com sucesso')
    })
    .catch((error) => {
        console.log(error)
    })
});

test("Consultar Usuarios", () => {
    Api.get('usuarios')
    .then((response) => {
        const usuarios = response.data;
        expect(usuarios.length).toBe(5);
    })
    .catch((error) => {
        console.log(error)
    })
})

test("Atualizando Usuario", () => {
    const data = {
        name: 'Admin 1',
        login: 'admin 1',
        password: '123'
    }
    Api.put(`usuarios/7`, data)
    .then((response) => {
        expect(response.status).toBe(200);
        expect(response.data.message).toBe('Usuario atualizado com sucesso')
    })
    .catch((error) => {
        console.log(error)
    })
});

test('Excluir Usuario', () => {
    Api.delete(`usuarios/7`)
    .then((response) => {
        const message = response.data.message
        expect(message).toBe('Usuario deletado com sucesso')
    })
    .catch((error) => {
        console.log(error)
    })
})