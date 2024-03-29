import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import logger from './lib/logger'
import bodyParser from 'body-parser'
import middleware from './middleware'
import { errorHandlerMiddleware } from './middleware/errorHandler'
import { responseHandlerMiddleware } from './middleware/responseHandler'

import { api } from './api'

import config from './config.json'

import { BODY_LIMIT } from './config/env'

const app = express()
app.server = http.createServer(app)

// logger
app.use(morgan('dev', { stream: logger.stream }))

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders,
  }),
)
app.use(helmet())

app.use(
  bodyParser.json({
    limit: BODY_LIMIT || config.bodyLimit,
  }),
)
app.use(bodyParser.urlencoded({ extended: true }))

// add mongo and logger to req
app.use((req, res, next) => {
  req.log = logger
  next()
})

// internal middleware
app.use(middleware({ config }))
app.use(responseHandlerMiddleware)

// api router

app.use('/api', api())

app.use(function (req, res, next) {
  if (!req.route) {
    res.status(404)
    return next(new Error('Not Found'))
  }
  next()
})

app.use(errorHandlerMiddleware)

export default app
