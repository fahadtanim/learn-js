import { FaSquareJs } from 'react-icons/fa6'
import { SiCompilerexplorer } from 'react-icons/si'
export const JsMenu = [
  {
    id: 'js-1',
    groupLabel: 'JavaScript',
    groupLink: '/javascript',
    icon: <FaSquareJs />,
    isGroup: false,
    groupItems: []
  },
  {
    id: 'js-2',
    groupLabel: 'JS Fundamentals',
    groupLink: '/javascript/js-2',
    icon: SiCompilerexplorer,
    isGroup: true,
    groupItems: [
      {
        id: 'js-2.1',
        label: 'Compiler vs Interpreter',
        link: '/javascript/js-2.1'
      },
      {
        id: 'js-2.2',
        label: 'Just In Time',
        link: '/javascript/js-2.2'
      },
      {
        id: 'js-2.3',
        label: 'JS Engine',
        link: '/javascript/js-2.3'
      },
      {
        id: 'js-2.4',
        label: 'Polyfilling',
        link: '/javascript/js-2.4'
      },
      {
        id: 'js-2.5',
        label: 'Transpiling',
        link: '/javascript/js-2.5'
      },
      {
        id: 'js-2.6',
        label: 'Execution Context',
        link: '/javascript/js-2.6'
      },
      {
        id: 'js-2.7',
        label: 'Hoisting',
        link: '/javascript/js-2.7'
      },
      {
        id: 'js-2.8',
        label: 'Event Loop',
        link: '/javascript/js-2.8'
      },
      {
        id: 'js-2.9',
        label: 'JavaScript Scope',
        link: '/javascript/js-2.9'
      },
      {
        id: 'js-2.10',
        label: 'Closure',
        link: '/javascript/js-2.10'
      },
      {
        id: 'js-2.11',
        label: 'IIFE',
        link: '/javascript/js-2.11'
      },
      {
        id: 'js-2.12',
        label: 'Higher Order Function',
        link: '/javascript/js-2.12'
      },
      {
        id: 'js-2.13',
        label: 'Currying',
        link: '/javascript/js-2.13'
      },
      {
        id: 'js-2.14',
        label: 'Events in Javascript',
        link: '/javascript/js-2.14'
      }
      // {
      //   id: 'js-2.15',
      //   label: 'IIFE',
      //   link: '/javascript/js-2.15'
      // }
    ]
  }
]
