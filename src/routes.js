import HomeView from './$views/home.view.svelte'
import LoginView from './$views/login.view.svelte'
import TasksView from './$views/tasks.view.svelte'

import { TeacherStore } from './stores'

const routes = [
    {
        name: '/',
        component: HomeView
    },
    {
        name: 'login',
        component: LoginView,
        onlyIf: {guard: needLogin, redirect: 'tasks'}
    },
    {
        name: 'tasks',
        component: TasksView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
]

function needLogin() {
    const token = localStorage.getItem('token')
    return !token
}

function isLogin() {
    
    const token = localStorage.getItem('token')

    if(token) {
        const teacher = localStorage.getItem('teacher')
        TeacherStore.set( JSON.parse(teacher) )
    } 

    return token
}

export { routes }