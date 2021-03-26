import {
  CharStreams,
  CodePointBuffer,
  CodePointCharStream,
  IntStream
} from 'antlr4ts'
import { Readable } from 'stream'
import { streamToAsyncGenerator } from './helpers'

export namespace BaseCharStreams {
  /** Creates a CharStream from a Node.js Readable binary stream. If no encoding is provided, UTF-8 is assumed. */
  export async function fromNodeReadable (readable: Readable, encoding?: BufferEncoding, sourceName?: string): Promise<CodePointCharStream> {
    const buffers = []
    const generator = streamToAsyncGenerator(readable)

    for await (const chunk of generator) {
      buffers.push(chunk)
    }

    return fromNodeBuffer(Buffer.concat(buffers), encoding, sourceName)
  }

  /** Creates a CharStream from a Node.js Buffer. If no encoding is provided, UTF-8 is assumed. */
  export function fromNodeBuffer (buffer: Buffer, encoding?: BufferEncoding, sourceName?: string): CodePointCharStream {
		if (sourceName === undefined || sourceName === null || sourceName.length === 0) {
			sourceName = IntStream.UNKNOWN_SOURCE_NAME
		}

    if (encoding === undefined || encoding === null || encoding.length === 0) {
      encoding = 'utf8'
    }

    const contents = buffer.toString(encoding)
		const codePointBufferBuilder = CodePointBuffer.builder(contents.length)
		const cb = new Uint16Array(contents.length)

		for (let i = 0; i < contents.length; i++) {
			cb[i] = contents.charCodeAt(i)
		}

		codePointBufferBuilder.append(cb)

		return CodePointCharStream.fromBuffer(codePointBufferBuilder.build(), sourceName)
	}

  export const fromString = CharStreams.fromString
}
