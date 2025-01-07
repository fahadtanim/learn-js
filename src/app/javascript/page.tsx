import { withMotionWrapped } from '@/components/atoms'
import Typography from '@/components/atoms/Typography'
import { Alert, Button, HR, List, ListItem } from 'flowbite-react'
import Link from 'next/link'
import { HiInformationCircle, HiOutlineArrowRight } from 'react-icons/hi'
const MotionList = withMotionWrapped(List)
export default function JavaScript() {
  return (
    <>
      <div className="p-4">
        <Typography mode="h2">
          What is <Typography mode="gradient">JavaScript?</Typography>
        </Typography>
        <Typography>
          JavaScript is{' '}
          <Typography mode="b-text">
            a magic programming language for the web
          </Typography>
          . It is a lightweight interpreted (or just-in-time compiled)
          programming language with first-class functions. It brings life,
          interaction, and logic to websites and web applications. Imagine a
          website as a body — HTML is the skeleton, CSS is the skin and style,
          and JavaScript is the brain that makes it think, move, and respond.
        </Typography>
        <Typography mode="h6">Here’s the magic:</Typography>

        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Without JavaScript:</Typography> A button
            on a website is just a decoration.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">With JavaScript:</Typography> That button
            can click, show alerts, fetch data from servers, play music, and
            much more!
          </ListItem>
        </MotionList>
        <Typography mode="h6">Why is it wonderful?</Typography>
        <MotionList className="space-y-1 text-gray-300 list-disc list-inside mb-4">
          <ListItem>
            <Typography mode="b-text">Everywhere:</Typography> It runs in
            browsers, servers (like Node.js), and even IoT devices.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Asynchronous Power:</Typography> It can
            fetch data from servers while users browse, making apps fast and
            seamless.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Universal:</Typography> Works on every
            browser and is essential for modern web development.
          </ListItem>
        </MotionList>
        <Typography>
          JavaScript is a core technology of the World Wide Web. It's used in
          many non-browser environments, such as Node.js, Apache CouchDB, and
          Adobe Acrobat. It is a lightweight, interpreted, prototype-based,
          multi-paradigm, single-threaded, dynamic language. It supports
          object-oriented, imperative, and declarative styles.
        </Typography>
        <Typography>
          According to a 2023 Stack Overflow Annual Developer Survey, JavaScript
          is the most popular programming language for the 11th year in a row.
        </Typography>
        <HR />
        <Typography>
          <Typography mode="b-text">JavaScript</Typography> was invented by{' '}
          <Typography mode="b-text">Brendan Eich</Typography> of Netscape
          Communications in 1995. It was developed for{' '}
          <Typography mode="b-text">Netscape 2</Typography>. But at that time
          the most popular programming language was{' '}
          <Typography mode="b-text">JAVA</Typography>. So they used that
          popularity to their advantage and named their language after it. As it
          is a <Typography mode="b-text">Scripting Language</Typography>, taking
          the name <Typography mode="b-text">JAVA</Typography> they named it{' '}
          <Typography mode="b-text">JavaScript</Typography>. In short we call
          it, <Typography mode="b-text">JS</Typography>.
        </Typography>
        <Alert
          color="failure"
          icon={HiInformationCircle}
          className="!bg-gray-800 !text-red-400"
        >
          <Typography className="!text-red-400 !mb-0">
            <Typography mode="b-text" className="!text-red-400">
              Beware:{' '}
            </Typography>{' '}
            JavaScript & Java is{' '}
            <Typography mode="b-text" className="!text-red-400">
              not same{' '}
            </Typography>
            & they are{' '}
            <Typography mode="b-text" className="!text-red-400">
              not related
            </Typography>
            . They are{' '}
            <Typography mode="b-text" className="!text-red-400">
              two different language.
            </Typography>
          </Typography>
        </Alert>
      </div>
      <div className="flex justify-end p-4">
        <Button
          gradientDuoTone="greenToBlue"
          as={Link}
          href={'/javascript/js-2.1'}
          className="text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all"
        >
          Next Section js-2.1
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </>
  )
}
