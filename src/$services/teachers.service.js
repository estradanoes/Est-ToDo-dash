import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appEror',
    message: 'Error de conexión'
}

export default {
    teacherLogin
}

function teacherLogin(data) {
    return new Promise((resolve, reject) => {

        Superagent
            .post('http://localhost:7777/teachers/login')
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}