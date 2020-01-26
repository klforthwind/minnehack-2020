import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export const createEvent = payload => api.post(`/event/create`, payload)
export const updateEvent = (id,payload)  => api.put(`/event/update/${id}`, payload)
export const getEvents = () => api.get(`/event/events`)
export const getEventByID = (id) => api.get(`/event/event/${id}`)
export const getEventsByCreator = (creator) => api.get(`/event/event/creator/${creator}`)
export const getEventsByVolunteer = (volunteer) => api.get(`/event/event/volunteer/${volunteer}`)
export const addVolunteerToEvent = (id, payload) => api.put(`/event/add_volunteer/${id}`,payload)
export const removeVolunteerFromEvent = (id) => api.put(`/event/remove_volunteer/${id}`)
export const deleteEvent = (id) => api.put(`/event/delete/${id}`)
export const login = payload => api.post(`/auth/login`, payload)
export const createUser = payload => api.post(`/auth/create`, payload)
export const getUserByID = (id) => api.get(`/auth/user/${id}`)
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
