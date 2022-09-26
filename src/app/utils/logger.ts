import log from 'loglevel'

const logger = log.getLogger('default')

if (process.env.NODE_ENV === 'development') {
  logger.enableAll()
}

export { logger }
