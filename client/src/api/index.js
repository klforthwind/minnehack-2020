import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export const createEvent = payload => api.post(`/event/create`, payload)
export const updateEvent = payload => api.put(`/event/update/${id}`, payload)
export const getEvents = () => api.get(`/event/events`)
export const getEventByID = () => api.get(`/event/event/${id}`)
export const getEventsByCreator = () => api.get(`/event/event/creator/${creator}`)
export const getEventsByVolunteer = () => api.get(`/event/event/volunteer/${volunteer}`)
export const addVolunteerToEvent = () => api.put(`/event/add_volunteer/${id}`)
export const removeVolunteerFromEvent = () => api.put(`/event/remove_volunteer/${id}`)
export const deleteEvent = () => api.put(`/event/delete/${id}`)
export const login = payload => api.post(`/auth/login`, payload)
export const createUser = payload => api.post(`/auth/create`, payload)
export const getUserByID = () => api.get(`/auth/user/${id}`)
export const getUsers = () => api.get(`/auth/users`)

const apis = {
    createEvent,
    updateEvent,
    getEvents,
    getEventByID,
    getEventsByCreator,
    getEventsByVolunteer,
    addVolunteerToEvent,
    removeVolunteerFromEvent,
    deleteEvent,
    login,
    createUser,
    getUserByID,
    getUsers
}

export default apis
