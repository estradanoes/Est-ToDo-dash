import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appEror',
    message: 'Error de conexión'
}

export default {
    getSummary,
}

function getSummary(userId) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')
       
        Superagent
            .get('http://localhost:7777/summary')
            .set('token', token)
            .query({ userId: userId })
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

