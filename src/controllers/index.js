import TodoModel from '../models/todo.js'

export const getTodos = async (req, res) => {
    try {
        const response = await TodoModel.find()
        res.status(200).json({
            response
        })
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}

export const getTodo = async (req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(401)
        throw new Error('id is not found')
    }

    try {
        const response = await TodoModel.findOne({
            _id: id
        })

        if (!response) {
            res.status(400).send('UpdateError: the requested id is not found')
        }

        res.status(200).json(response)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}

export const addTodo = async (req, res) => {
    const data = req.body

    if (!data.title || !data.status) {
        res.status(401).send('ValidationError: title or status is not found')
    }

    try {
        const response = await TodoModel.create(data)
        if (!response) {
            res.status(400).send('CreateError: create data error')
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}

export const updateTodo = async (req, res) => {
    const id = req.params.id
    const data = req.body

    if (!data.title || !data.status || !id) {
        res.status(401).send('ValidationError: title or status or id is not found')
    }

    try {
        const response = await TodoModel.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                title: data.title,
                status: data.status
            }
        }, {
            new: true
        })

        if (!response) {
            res.status(400).send('UpdateError: the requested id is not found')
        }

        res.status(200).json(response)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}

export const deleteTodo = async (req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).send('DeleteError: id is not valid')
    }

    try {
        const response = await TodoModel.findOneAndDelete({
            _id: id
        })
        if (!response) {
            res.status(400).send('DeleteError: the requested id is not found')
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}