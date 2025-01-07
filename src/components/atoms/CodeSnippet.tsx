'use client'

import * as motion from 'motion/react-client'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import { useEffect, useRef, useState } from 'react'
import prettier from 'prettier/standalone'
import babelPlugin from 'prettier/plugins/babel'
import estreePlugin from 'prettier/plugins/estree'
import 'highlight.js/styles/atom-one-dark.min.css'

const CodeSnippet = ({ children }: { children: string }) => {
  const [codeblock, setCodeblock] = useState('')
  const codeRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      console.log('children', children)
      try {
        const result = await prettier.format(children, {
          parser: 'babel',
          plugins: [babelPlugin, estreePlugin]
        })
        setCodeblock((_prev) => result)
      } catch (error) {
        console.error('Failed to format code block:', error)
      }
    })()
  }, [children])

  useEffect(() => {
    if (codeblock === '') return
    hljs.registerLanguage('javascript', javascript)
    hljs.highlightAll()
  }, [codeblock])

  return (
    <motion.div
      className="rounded-md mb-4"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1
      }}
    >
      <pre>
        <code className="javascript" ref={codeRef}>
          {codeblock}
        </code>
      </pre>
    </motion.div>
  )
}

export default CodeSnippet
