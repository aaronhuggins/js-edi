import { Readable } from 'stream'

/** Convert a Readable stream to an Async Generator. Based on https://www.derpturkey.com/nodejs-async-generators-for-streaming */
export async function * streamToAsyncGenerator<T = any> (reader: Readable, chunkSize?: number): AsyncGenerator<T> {
  let readableEnded = false
  const signalEnd = new Promise<void>(resolve => {
    reader.once('end', () => {
      // Manage readableEnded, because not all implementors of Readable set this to true on end.
      readableEnded = true

      resolve()
    })
  })

  // eslint-disable-next-line no-unmodified-loop-condition
  while (!readableEnded) {
    while (reader.readable) {
      const val: T = typeof chunkSize === 'number'
        ? reader.read(chunkSize) ?? reader.read()
        : reader.read()

      if (typeof val !== 'undefined' && val !== null) {
        yield val
      } else {
        break
      }
    }

    const signalReadable = new Promise<void>(resolve => {
      reader.once('readable', resolve)
    })

    await Promise.race([signalEnd, signalReadable])
  }
}
