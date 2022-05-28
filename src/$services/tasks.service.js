import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appEror',
    message: 'Error de conexión'
}

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getCasa,
    getTrabajo,
    getUniversidad,
    getAllTasks
}

function getTasks(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function createTask(data) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .post('http://localhost:7777/tasks')
            .set('token', token)
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function updateTask( taskId, data ) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .put(`http://localhost:7777/tasks/${ taskId }`)
            .set('token', token)
            .send(data)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function deleteTask( taskId ) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .delete(`http://localhost:7777/tasks/${ taskId }`)
            .set('token', token)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function getCasa(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function getTrabajo(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function getUniversidad(query) {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}

function getAllTasks() {
    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')

        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .end((error, resp) => {
                
                if(error)
                    return resolve( resp? resp.body : conexionError )

                resolve(resp.body)
            })
    })
}
