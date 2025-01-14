import {
  CodeSnippet,
  AlertBox,
  Typography,
  withMotionWrapped,
  Links
} from '@/components/atoms'
import { HR, List, ListItem } from 'flowbite-react'
import * as motion from 'motion/react-client'
import { DesignBlock } from '@/components/organisms'
import { LoadingSkeleton } from '@/components/molecules'

const MotionList = withMotionWrapped(List)

export const JSCompiler = [
  {
    id: 'js-2.1',
    next: '/javascript/js-2.2',
    prev: '/javascript',
    title: 'Compiler vs Interpreter',
    content: (
      <>
        <Typography mode="h2">
          Compiler vs <Typography mode="gradient">Interpreter</Typography>
        </Typography>
        <Typography>
          Programming languages that we use day by day, they are understandable
          by us. But they are not understandable by the computer. That means
          computer can't run or execute those directly. So we need some kind of
          program which can translate our code into something that is
          understandable by the computer.
        </Typography>
        <Typography>
          <Typography mode="b-text">Compiler </Typography> and{' '}
          <Typography mode="b-text"> Interpreter </Typography> are programs
          which is responsible for exactly doing that. They read our code and
          translate it into something that is understandable by the computer. So
          that computer can run it. Even though they do the same thing but their
          name is different because of the way they do the translation.
        </Typography>
        <Typography mode="h4">
          <Typography mode="gradient">Compiler:</Typography>
        </Typography>
        <Typography>
          Compiler is a program which{' '}
          <Typography mode="b-text">takes the entire code</Typography> and
          <Typography mode="b-text"> translate </Typography>
          it into{' '}
          <Typography mode="b-text">intermediate code (bytecode) </Typography>
          or <Typography mode="b-text">machine code (bynary)</Typography>. So
          once compiled, the program can be executed as a standalone program.
          That means there is no need of compiler anymore. Example: C, C++, Java
          etc.
        </Typography>

        <DesignBlock
          title="So, that's how it works..."
          Boxes={[
            {
              title: 'Source Code',
              classes: 'bg-cyan-600'
            },
            {
              title: 'Compiler',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'Machine Code / Intermediate Code',
              classes: 'bg-green-600'
            },
            {
              title: 'Output',
              classes: 'bg-purple-600'
            }
          ]}
        />
        <Typography>
          It comes with it's own{' '}
          <Typography mode="b-text">advantages</Typography> and{' '}
          <Typography mode="b-text"> disadvantages</Typography>...
        </Typography>
        <Typography mode="h6">Advantages:</Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            Compiler runs only once. That means it only needs to be compiled
            once. Compiled output can be run directly. This results in faster
            execution.
          </ListItem>
          <ListItem>
            Compilers generate binaries that are optimized for specific target
            platforms (like Windows, macOS, Linux, or embedded devices). So it's
            perfomance and resource usage are optimized. This is essential for
            platforms where performance, resource usage, and battery life are
            critical (like IoT devices or embedded systems).Modern compilers
            like GCC, Clang, and Rust's Cargo apply many optimizations to the
            code, such as dead code elimination, loop unrolling, and inlining
            functions. This improves the overall performance and efficiency of
            the program, reducing memory usage and execution time.
          </ListItem>
          <ListItem>
            Since a compiled binary does not contain the original source code,
            it's much harder to reverse-engineer than interpreted languages. It
            provides security for proprietary code, making it harder for
            competitors to steal or copy the logic.
          </ListItem>
          <ListItem>
            Compiled programs don't require an interpreter or external runtime
            to execute. They can be run directly from the compiled binary. It
            eliminates the need for users to install extra software (like Python
            or Node.js) to run your program.
          </ListItem>
          <ListItem>
            Compilers perform static analysis and catch errors before execution.
            This includes syntax errors, type errors, and missing variables.This
            reduces runtime errors, and helps you fix issues early in
            development.
          </ListItem>
        </MotionList>
        <Typography mode="h6">Disadvantages:</Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            Large codebases with thousands of files take a long time to compile,
            especially with optimization flags enabled. Projects like Linux
            Kernel or Chromium can take hours to compile from source. It slows
            down the development workflow, and developers have to wait for every
            change to be recompiled.
          </ListItem>
          <ListItem>
            Compiled binaries are platform-specific, meaning a program compiled
            for Windows won’t run on Linux or macOS. A Windows{' '}
            <span className="h-fit bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              .exe{' '}
            </span>
            file cannot be executed on macOS or Linux. This complicates
            cross-platform development. Developers need to cross-compile or use
            tools like Docker to generate binaries for multiple platforms.
          </ListItem>
          <ListItem>
            Since the machine code generated by the compiler is hard to read,
            debugging binary files is challenging. If you encounter a
            segmentation fault (like in C/C++), it can be hard to track the
            exact source of the error. Tools like gdb or lldb are necessary to
            debug compiled binaries, but they have a learning curve.
          </ListItem>
          <ListItem>
            Once a program is compiled, it cannot be modified without
            recompiling the entire source code. This limits the ability to
            iterate quickly on changes. For dynamic applications that require
            code changes during runtime (like web apps), development time is
            increased.
          </ListItem>
          <ListItem>
            Compiler can be CPU intensive, which means they can use a lot of
            memory and CPU power. Compilers like GCC and Rust's Cargo are
            resource-hungry, requiring significant CPU and memory usage. This
            can be a problem on low-end machines, making it difficult to compile
            large projects.
          </ListItem>
        </MotionList>
        <HR.Trimmed />
        <Typography mode="h4">
          <Typography mode="gradient">Interpreter:</Typography>
        </Typography>
        <Typography>
          An interpreter is a program that{' '}
          <Typography mode="b-text">
            directly executes source code line-by-line
          </Typography>{' '}
          without converting it to machine code beforehand.{' '}
          <Typography mode="b-text">
            {' '}
            Instead of compiling the entire program, it reads, translates, and
            executes the code simultaneously.{' '}
          </Typography>{' '}
          Languages like Python, JavaScript, PHP, and Ruby commonly use
          interpreters.
        </Typography>

        <DesignBlock
          title="So, that's how it works..."
          Boxes={[
            {
              title: 'Source Code',
              classes: 'bg-cyan-600'
            },
            {
              title: 'Interpreter',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'Output',
              classes: 'bg-purple-600'
            }
          ]}
        />
        <Typography>
          Now let's see what is it's{' '}
          <Typography mode="b-text">advantages</Typography> and{' '}
          <Typography mode="b-text"> disadvantages</Typography>...
        </Typography>
        <Typography mode="h6">Advantages:</Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            Since there's no need to compile the code, you can run it
            immediately after making changes. It enables faster prototyping,
            testing, and debugging.
          </ListItem>
          <ListItem>
            Interpreted code runs on any system with the appropriate interpreter
            (like Node.js for JavaScript or Python runtime for Python).
          </ListItem>
          <ListItem>
            Since interpreters execute code line-by-line, errors are caught
            immediately and provide detailed stack traces. This allows
            developers to catch errors earlier and see exactly which line
            failed, making debugging faster and easier.
          </ListItem>
        </MotionList>
        <Typography mode="h6">Disadvantages:</Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            Since code is executed line-by-line, it's slower than a compiled
            program that runs in machine code. Performance-critical applications
            (like games or real-time processing) often use compiled languages
            like C/C++ or Rust.
          </ListItem>
          <ListItem>
            User need to have the interpreter installed on their system. To run
            Python, you need to install the Python interpreter; to run
            JavaScript, you need a browser or Node.js. It adds a dependency, and
            if the interpreter is missing, your code won't run.
          </ListItem>
          <ListItem>
            The source code is exposed to users, unlike a compiled binary which
            hides the logic. This can be a security concern if you don't want
            users to see or copy your source code.
          </ListItem>
          <ListItem>
            Since the interpreter is always running alongside the program, it
            takes up more system memory. For embedded systems or low-resource
            devices, this can be a significant limitation.
          </ListItem>
          <ListItem>
            Interpreters don't optimize code as aggressively as compilers.
            Performance issues are difficult to resolve in interpreted
            languages, while compilers offer advanced optimizations.
          </ListItem>
        </MotionList>
        <HR.Trimmed />
        <Typography>
          So, now if I throw a question at you, which one is better? It's a
          really difficult question to answer. But what if we could choose and
          pick the best parts from both compiler and interpreter? Let's have a
          look at it in the next section...
        </Typography>
      </>
    )
  },
  {
    id: 'js-2.2',
    next: '/javascript/js-2.3',
    prev: '/javascript/js-2.1',
    title: 'Just In Time',
    content: (
      <>
        <Typography mode="h2">
          Just In <Typography mode="gradient">Time</Typography>
        </Typography>
        <Typography>
          In the previous section, We have seen the advantages and disadvantages
          of compiler and interpreter. And at last we got a question what if we
          could pick the best of both. That brings us to{' '}
          <Typography mode="b-text">Just In Time</Typography>.
        </Typography>
        <Typography>
          <Typography mode="b-text">Just In Time (JIT)</Typography> is a
          interpreter/compiler. What did I meant by interpreter/compiler? It's
          more specifically a{' '}
          <Typography mode="b-text">hybrid approach </Typography>that{' '}
          <Typography mode="b-text">combines </Typography> the
          <Typography mode="b-text">
            {' '}
            interpretation and compilation{' '}
          </Typography>
          . So, don't get confused when someone says JIT Compiler or JIT
          Interpeter. It's both. Instead of interpreting code line-by-line (like
          a pure interpreter) or compiling the entire program upfront (like a
          compiler), a
          <Typography mode="b-text">
            {' '}
            JIT compiles parts of the program during execution and reuses that
            compiled code.{' '}
          </Typography>
          This process leads to faster execution while still allowing for the
          flexibility of interpreted languages. In the beginning, even though JS
          Engine used to use interpreters,{' '}
          <Typography mode="b-text">now it uses JIT</Typography>. Now let's see
          how JS uses JIT...
        </Typography>
        <Typography>
          In JavaScript, the Just-In-Time (JIT) compilation process consists of
          three core components:
        </Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>Monitor/Profiler</ListItem>
          <ListItem>Baseline Compiler</ListItem>
          <ListItem>Optimization Compiler</ListItem>
        </MotionList>
        <Typography>Now let's discuss what each component does...</Typography>
        <Typography mode="h6">Monitor/Profiler:</Typography>
        <Typography>
          Initially, the JIT compiler in the JavaScript engine{' '}
          <Typography mode="b-text">runs an interpreter</Typography> to analyze
          the code. This step is{' '}
          <Typography mode="b-text">Monitor/Profiler</Typography>. As the
          interpreter processes the code, it{' '}
          <Typography mode="b-text">tracks</Typography> how frequently each
          statement is executed. When a statement's{' '}
          <Typography mode="b-text">execution count</Typography> reaches the
          <Typography mode="b-text"> first threshold</Typography>, it is marked
          as <Typography mode="b-text">"Warm"</Typography>. If the{' '}
          <Typography mode="b-text">execution count </Typography>
          continues to increase and reaches a{' '}
          <Typography mode="b-text"> second threshold</Typography>, the
          statement is labeled as{' '}
          <Typography mode="b-text">"Hot code"</Typography>. This process allows
          the profiler to maintain a record of frequently used statements,
          helping to identify the parts of the code that are executed most
          often.{' '}
          <Typography mode="b-text">
            It signals when specific parts of the code should be handed off to
            the Baseline Compiler or Optimizing Compiler for further
            optimization.
          </Typography>
        </Typography>
        <AlertBox mode="info">
          <Typography className="!text-blue-300 !mb-0">
            <Typography mode="b-text" className="!text-blue-400">
              Purpose: To decide which parts of the code should be optimized for
              performance.
            </Typography>
          </Typography>
        </AlertBox>
        <HR.Trimmed />
        <Typography mode="h6">Baseline Compiler:</Typography>
        <Typography>
          The Baseline Compiler is responsible for{' '}
          <Typography mode="b-text">
            creating an initial, low-level compiled version{' '}
          </Typography>{' '}
          of the code. Unlike the interpreter, which runs line-by-line, the
          baseline compiler
          <Typography mode="b-text"> generates bytecode </Typography>for faster
          execution. It also{' '}
          <Typography mode="b-text"> tracks types </Typography> of frequently
          used values and stores this information to improve performance.
        </Typography>
        <AlertBox mode="info">
          <Typography className="!text-blue-300 mb-0">
            <Typography mode="b-text" className="!text-blue-400">
              Purpose: To provide a quick and simple compilation of code for
              faster execution without extensive optimizations.
            </Typography>
          </Typography>
        </AlertBox>
        <HR.Trimmed />
        <Typography mode="h6">Optimizing Compiler:</Typography>
        <Typography>
          The Optimizing Compiler takes the{' '}
          <Typography mode="b-text">hot code</Typography> (as flagged by the
          profiler) and compiles it into highly optimized machine code. It
          applies advanced optimization techniques to improve performance. It
          uses sophisticated techniques like inlining, loop unrolling, constant
          folding, and dead code elimination to make the machine code more
          efficient. Converting frequently executed hot code directly into
          machine code can significantly improve overall performance. The
          Optimizing Compiler handles this process. What is this inlining? loop
          unrolling? constant folding? google it... just kidding, a short
          description is given below.
        </Typography>
        <AlertBox mode="info">
          <Typography className="!text-blue-300 mb-0">
            <Typography mode="b-text" className="!text-blue-400">
              Purpose: To provide highly optimized machine code for hot parts of
              the code, significantly boosting performance.
            </Typography>
          </Typography>
        </AlertBox>
        <HR.Trimmed />
        <DesignBlock
          title="So, the total Process goes through like..."
          Boxes={[
            {
              title: 'JS Source Code',
              classes: 'bg-cyan-600'
            },
            {
              title: 'JIT Interpreter (Monitor/Profiler)',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'Baseline Compiler',
              classes: 'bg-orange-600 rounded-md'
            },
            {
              title: 'Optimizing Compiler',
              classes: 'bg-blue-600 rounded-md'
            },
            {
              title: 'Output',
              classes: 'bg-purple-600'
            }
          ]}
        />
        <Typography>
          So, In the end we can see that JIT has both Interpreter and Compiler.
          It's a hybrid program.
        </Typography>
        <AlertBox mode="failure">
          <Typography className="!text-red-300 mb-0">
            <Typography mode="b-text" className="!text-red-400">
              Note: Different browsers may have different implementaions of JIT
              compilers. The above mentioned process is a generalized process.
            </Typography>
          </Typography>
        </AlertBox>
        <AlertBox showIcon={false} className="!text-gray-300">
          Here's a short description of what is inlining, loop unrolling,
          constant folding & dead code elimination.
          <MotionList className=" text-gray-300 mb-4">
            <ListItem className="text-gray-300">
              <Typography mode="b-text">Inlining: </Typography>Inlining replaces
              a function call with the actual body of the function to avoid the
              overhead of calling the function repeatedly. Real-life analogy:
              Instead of calling a helper for simple math like "multiply 5 by
              5," you just do the calculation yourself.
            </ListItem>
            <ListItem className="text-gray-300">
              <Typography mode="b-text">Loop unrolling: </Typography> Loop
              unrolling reduces the number of iterations in a loop by
              "unrolling" multiple iterations into one.Real-life analogy:
              Instead of repeating "Step 1, Step 2, Step 3, Step 4" in a loop,
              you just write each step out individually, saving time in
              repetitive checking.
            </ListItem>
            <ListItem className="text-gray-300">
              <Typography mode="b-text">constant folding: </Typography>
              Constant folding evaluates constant expressions at compile time
              instead of runtime. Real-life analogy: If you know the result of 2
              × 3 × 4 is 24, you just write 24 instead of doing the math every
              time.
            </ListItem>
            <ListItem className="text-gray-300">
              <Typography mode="b-text">Dead code elimination: </Typography>Dead
              code elimination removes parts of the code that will never be
              executed or have no effect on the program. Real-life analogy: If
              you have extra tools in your toolbox that you never use, you get
              rid of them to make your toolbox lighter.
            </ListItem>
          </MotionList>
        </AlertBox>
      </>
    )
  },
  {
    id: 'js-2.3',
    next: '/javascript/js-2.4',
    prev: '/javascript/js-2.2',
    title: 'JS Engine',
    content: (
      <>
        <Typography mode="h2">
          JS <Typography mode="gradient">Engine</Typography>
        </Typography>
        <Typography>
          We already know by far that JS doesn't run on it's own in computer. JS
          runs in a program that we call{' '}
          <Typography mode="b-text">JS Engine</Typography>. Different kinds of
          browser or environments use Different JS Engines. The most popular
          ones are:
        </Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Google Chrome:</Typography> V8 Engine
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Mozilla Firefox:</Typography> Spider
            Monkey
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Mozilla Firefox:</Typography> Spider
            Monkey
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Safari:</Typography> Javascript Core
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Node JS:</Typography> V8 Engine
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Microsoft Edge:</Typography> Chakra
          </ListItem>
        </MotionList>
        <Typography>
          Among all these engines,{' '}
          <Typography mode="b-text">V8 Engine is the most popular</Typography>.
          So, we are going to learn a bit about V8 Engine.
        </Typography>
        <Typography mode="h4">
          <Typography mode="gradient">V8 Engine:</Typography>
        </Typography>
        <Typography>
          In the early days, JavaScript engines relied solely on interpreters to
          execute code. However, interpreters had certain limitations that
          affected performance. To address these issues, modern JavaScript
          engines now use a{' '}
          <Typography mode="b-text">Just-In-Time (JIT) compiler</Typography>,
          which combines the strengths of both interpreters and compilers. By
          leveraging the compiler, the JIT optimizes the code for better
          performance, making engines like V8 highly efficient and widely
          popular.
        </Typography>
        <Typography>Let's see how the V8 Engine works...</Typography>

        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Parsing and Tokenization:</Typography> The
            process begins with the source JavaScript code being fed into a
            <Typography mode="b-text"> parser</Typography>. The parser performs
            <Typography mode="b-text"> tokenization</Typography>, breaking down
            the code into tokens. Using these tokens, it constructs{' '}
            <Typography mode="b-text">nodes</Typography> that are then used to
            create an{' '}
            <Typography mode="b-text">Abstract Syntax Tree (AST)</Typography>.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Bytecode Generation: </Typography>
            Once the{' '}
            <Typography mode="b-text">Abstract Syntax Tree (AST)</Typography> is
            ready, the V8 engine’s interpreter, known as{' '}
            <Typography mode="b-text">"Ignition"</Typography>, begins generating{' '}
            <Typography mode="b-text">bytecode</Typography> from it. At this
            stage, the <Typography mode="b-text">profiler</Typography> also
            starts analyzing the code to track which parts are executed
            frequently.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">
              Object Shaping and Inline Caching:
            </Typography>{' '}
            During interpretation,{' '}
            <Typography mode="b-text">Ignition</Typography> assigns a{' '}
            <Typography mode="b-text">"shape"</Typography> to each object. This
            shape provides information about the object's structure, helping the
            engine with <Typography mode="b-text">inline caching</Typography>,
            which speeds up property lookups.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Optimization of Hot Code:</Typography>
            The <Typography mode="b-text">profiler </Typography> identifies{' '}
            <Typography mode="b-text">"Warm"</Typography>
            and <Typography mode="b-text">"Hot code"</Typography>, code that is
            executed frequently. This hot code is then sent to V8's optimizing
            compiler, called <Typography mode="b-text">"Turbofan"</Typography>.
            Turbofan takes the bytecode for these hot sections, optimizes it
            using techniques like inlining, loop unrolling, and constant
            folding, and finally generates highly efficient machine code.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Machine Code Generation:</Typography>
            The machine code produced by{' '}
            <Typography mode="b-text">Turbofan</Typography> is tailored for the
            specific system architecture (like x86, ARM, etc.), ensuring the
            best possible performance on that platform.
          </ListItem>
        </MotionList>
        <DesignBlock
          title="So, the V8 engine process is..."
          Boxes={[
            {
              title: 'JS Source Code',
              classes: 'bg-cyan-600'
            },
            {
              title: 'Parser',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'AST',
              classes: 'bg-orange-600'
            },
            {
              title: 'Ingition & Profiler',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'Hot Code',
              classes: 'bg-blue-600'
            },
            {
              title: 'Turbofan',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'Output',
              classes: 'bg-purple-600'
            }
          ]}
        />
      </>
    )
  },
  {
    id: 'js-2.4',
    next: '/javascript/js-2.5',
    prev: '/javascript/js-2.3',
    title: 'Polyfilling',
    content: (
      <>
        <Typography mode="h2">
          <Typography mode="gradient">Polyfilling</Typography>
        </Typography>
        <Typography>
          JavaScript is a constantly evolving language, with new features and
          tools being introduced regularly. This is beneficial for developers as
          it opens up new learning opportunities and provides upgraded tools for
          building more efficient applications. However, the standardization and
          adoption of these new features often lag behind, meaning that many
          users still rely on older browsers or environments that don't support
          the latest JavaScript features.
        </Typography>
        <Typography>
          This creates a challenge: developers are faced with a choice. They can
          either:
        </Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">
              Ignore the benefits of using the latest JavaScript features
            </Typography>{' '}
            and stick to older, more compatible code.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">
              Neglect users on older environments
            </Typography>{' '}
            by using the latest features that may not work for them.
          </ListItem>
        </MotionList>
        <Typography>
          The best solution is to <Typography mode="b-text">bridge </Typography>
          this gap by using a technique that makes newer JavaScript features
          available in older browsers. This is where{' '}
          <Typography mode="b-text">polyfilling </Typography>comes in, as it
          allows developers to provide modern JavaScript functionality to users
          with outdated browsers, ensuring compatibility and a better experience
          for all users. Normally we use a tool like{' '}
          <Typography mode="b-text">Babel</Typography> to polyfill the latest
          JavaScript features. It's task is to tranform the latest feature in
          such a way so that any browser or environments can understand that.
        </Typography>
        <Typography>
          <Typography mode="b-text">Polyfilling </Typography> is a technique
          used in web development to{' '}
          <Typography mode="b-text">
            provide modern features and functionalities in older browsers or
            environments that do not support them natively.
          </Typography>{' '}
          A polyfill is essentially a piece of code (often written in
          JavaScript) that <Typography mode="b-text">"fills in" </Typography>{' '}
          the missing features to{' '}
          <Typography mode="b-text">ensure compatibility </Typography> across
          different browsers.
        </Typography>
        <Typography mode="h6">Benefits of Polyfilling:</Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Cross-browser Compatibility:</Typography>{' '}
            Makes modern features work on older browsers.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Backward Compatibility:</Typography>{' '}
            Ensures modern apps can run on older systems.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">No Need for Browser Updates:</Typography>{' '}
            Users don't need to update their browsers to get access to modern
            features.
          </ListItem>
        </MotionList>
        <Typography mode="h6">Drawbacks of Polyfilling:</Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Increased Bundle Size: </Typography>{' '}
            Adding polyfills increases the size of the JavaScript file.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Performance Overhead: </Typography>{' '}
            Polyfilled code may not be as fast as native implementations.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Maintenance Issues: </Typography> As
            browsers improve, some polyfills may become unnecessary.
          </ListItem>
        </MotionList>
        <Typography>Before polyfilling Array.map()</Typography>
        <CodeSnippet>
          {`
const arr = [1,2,3,4];
      const newArr = arr.map(elem => {
    return elem * 2
});
console.log(newArr);`}
        </CodeSnippet>
        <Typography>After polyfilling Array.map()</Typography>
        <CodeSnippet>
          {`
Array.prototype.pMap = function(callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(callback(this[i], i, this));
   }
    return res;
}`}
        </CodeSnippet>
      </>
    )
  },
  {
    id: 'js-2.5',
    next: '/javascript/js-2.6',
    prev: '/javascript/js-2.4',
    title: 'Transpiling',
    content: (
      <>
        <Typography mode="h2">
          <Typography mode="gradient">Transpiling</Typography>
        </Typography>
        <Typography>
          <Typography mode="b-text">
            Transpiling (short for "source-to-source compiling") is the process
            of converting code written in one programming language or syntax to
            an equivalent version in another language or syntax
          </Typography>
          , typically at the same or a similar level of abstraction as the
          source code. It doesn't convert the source code to machine code. The
          primary purpose of transpilation is to enable developers to use newer
          features or syntaxes not supported in the target environment, or to
          convert code into a more widely supported language for portability and
          interoperability.
        </Typography>
        <Typography>
          The transpiling process is similar to the compiling process but with
          some key differences. While it also involves lexical analysis, syntax
          analysis, and semantic analysis, it typically does not include an
          optimization phase. Instead, it focuses on transforming the source
          code into an equivalent representation in the target language.
          <Typography mode="b-text">
            One of the most used example of transpiling is in using TypeScript.
          </Typography>
        </Typography>
        <Typography>Now let's see with some visuals...</Typography>
        <DesignBlock
          title="So, in terms of Compiler..."
          Boxes={[
            {
              title: 'Source Code',
              classes: 'bg-cyan-600'
            },
            {
              title: 'Compiler',
              classes: 'bg-violet-600 rounded-md'
            },
            {
              title: 'Machine Code',
              classes: 'bg-orange-600'
            }
          ]}
        />
        <DesignBlock
          title="But, in terms of Transpiler..."
          Boxes={[
            {
              title: 'Source Code of Language A',
              classes: 'bg-cyan-600'
            },
            {
              title: 'Transpiler',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'Source Code of Language B',
              classes: 'bg-green-600'
            }
          ]}
        />
        <Typography>
          Transpiler is most commonly used in{' '}
          <Typography mode="b-text">JavaScript Ecosystem. </Typography>
          Let's see some of the examples below...
        </Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">TypeScript to JavaScript: </Typography>
            TypeScript, a superset of JavaScript, is transpiled to plain
            JavaScript so it can run in browsers or environments that don't
            understand TypeScript.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">JSX to JavaScript: </Typography>
            JSX (used in React) is transpiled into regular JavaScript because
            browsers don't natively understand JSX syntax.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">ES6+ to ES5: </Typography>
            Modern JavaScript (e.g., ES6/ESNext) is often transpiled to an older
            version like ES5 to ensure compatibility with older browsers.
          </ListItem>
          <ListItem>CoffeeScript to JavaScript.</ListItem>
          <ListItem>
            SASS/SCSS to CSS (although technically preprocessing, it is often
            considered similar to transpiling).
          </ListItem>
          <ListItem>
            Tools like Babel and TypeScript Compiler (tsc) are commonly used for
            this purpose.
          </ListItem>
        </MotionList>
        <DesignBlock
          title="For TypeScript..."
          Boxes={[
            {
              title: 'TypeScript *.ts file',
              classes: 'bg-cyan-600'
            },
            {
              title: 'Transpiler',
              classes: 'bg-yellow-600 rounded-md'
            },
            {
              title: 'JavaScript *.js',
              classes: 'bg-green-600'
            }
          ]}
        />

        <Typography mode="h6">So, Why Transpile?</Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">
              Cross-Browser/Environment Compatibility:
            </Typography>{' '}
            Ensure code works in environments that don't support newer syntax or
            features.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Developer Productivity:</Typography> Use
            modern features, shorthand syntax, or type-checking during
            development while ensuring compatibility at runtime.
          </ListItem>
        </MotionList>
        <Typography>
          The concept of transpiling has been present since the early days of
          programming, with one of the earliest examples being Digital
          Research's XLT86 in 1981, which translated Intel 8080 assembly code to
          Intel 8086 assembly code.
        </Typography>
        <Typography>
          In the context of JavaScript, the evolution of the language led to the
          development of transpilers to bridge compatibility gaps. For instance,
          as new ECMAScript standards introduced modern JavaScript features,
          tools like Babel were created to transpile ES6+ code into ES5,
          ensuring compatibility with older browsers.
        </Typography>
        <Typography>
          Tools like Sass (for CSS) and CoffeeScript (for JavaScript) introduced
          the concept of writing in a higher-level or more ergonomic syntax and
          converting it to widely-supported formats. TypeScript transpiles to
          JavaScript, enabling developers to benefit from type checking and
          modern features while targeting different JavaScript versions. These
          tools were especially popular for frontend development, as they
          streamlined workflows for styling and scripting.
        </Typography>
        <Typography>
          JSX (for React) was introduced to bridge the gap between JavaScript
          and React, enabling developers to write React components in JSX.
        </Typography>
        <Typography>
          Transpilers have played a crucial role in the adoption of modern
          programming practices, allowing developers to write code using the
          latest language features while maintaining compatibility across
          diverse environments.
        </Typography>
        <Typography>
          In essence, transpiling arose as a practical solution to challenges
          posed by the rapid evolution of programming languages, diverse runtime
          environments, and the growing complexity of software applications. It
          has since become a critical part of modern development workflows.
        </Typography>
        <HR.Trimmed />
      </>
    )
  },
  {
    id: 'js-2.6',
    next: '/javascript/js-2.7',
    prev: '/javascript/js-2.5',
    title: 'Execution Context',
    content: (
      <>
        <Typography mode="h2">
          Execution <Typography mode="gradient">Context</Typography>
        </Typography>
        <Typography>
          An Execution Context in JavaScript is an{' '}
          <Typography mode="b-text">abstract environment </Typography>where the
          JavaScript code is executed and evaluated. It is created whenever a
          function, script, or block of code is executed.
        </Typography>
        <Typography>
          There are{' '}
          <Typography mode="b-text">
            three types of Execution Contexts
          </Typography>{' '}
          in JavaScript:
        </Typography>
        <MotionList className="space-y-1 list-disc list-inside text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">
              Global Execution Context (GEC):
            </Typography>{' '}
            Created when the JavaScript program starts.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">
              Function Execution Context (FEC):
            </Typography>{' '}
            Created every time a function is called.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Eval Execution Context (FEC):</Typography>{' '}
            Created when the eval() function is executed (rarely used)
          </ListItem>
        </MotionList>
        <Typography>Now Let's see what they are...</Typography>
        <Typography mode="h6">Global Execution Context (GEC):</Typography>
        <Typography>
          When JavaScript code is run, the JavaScript engine (like V8) creates
          the{' '}
          <Typography mode="b-text">Global Execution Context (GEC) </Typography>{' '}
          first.
        </Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            Created{' '}
            <Typography mode="b-text">
              when the JavaScript file is loaded
            </Typography>
            .
          </ListItem>
          <ListItem>
            It is the{' '}
            <Typography mode="b-text">default execution context</Typography>.
          </ListItem>
          <ListItem>
            It creates <Typography mode="b-text">two</Typography> things:
            <MotionList className="ml-5 mt-2 list-disc list-inside text-gray-300 mb-4">
              <ListItem>
                <Typography mode="b-text">The global object</Typography> (like
                <Typography mode="b-text"> window</Typography> in browsers or{' '}
                <Typography mode="b-text"> global</Typography> in Node.js).
              </ListItem>
              <ListItem>
                <Typography mode="b-text">this</Typography> keyword, which
                refers to the global object (
                <Typography mode="b-text"> window</Typography> in browsers or{' '}
                <Typography mode="b-text"> global</Typography> in Node.js).
              </ListItem>
            </MotionList>
          </ListItem>
        </MotionList>
        <Typography mode="h6">Function Execution Context (FEC):</Typography>
        <Typography>
          When functions are called, a new{' '}
          <Typography mode="b-text">
            Function Execution Context (FEC)
          </Typography>{' '}
          is created on top of the call stack, and once the function is done
          executing, the context is removed from the stack. It has access to all
          of the variables and functions in{' '}
          <Typography mode="b-text">Global Exectution Context (GEC)</Typography>
          .
        </Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            Created{' '}
            <Typography mode="b-text">when a function is invoked</Typography>.
          </ListItem>
          <ListItem>
            Each function invoke creates a new{' '}
            <Typography mode="b-text">
              Function Execution Context (FEC)
            </Typography>
            . So that means every function has his{' '}
            <Typography mode="b-text"> own execution context</Typography>.
          </ListItem>
          <ListItem>
            It has access to :{' '}
            <List nested className="text-gray-300 mb-4">
              <ListItem>
                <Typography mode="b-text">Variable environments</Typography>{' '}
                (local variable, function arguments)
              </ListItem>
              <ListItem>
                <Typography mode="b-text">Lexical environment</Typography>{' '}
                (reference to the outer variables, functions)
              </ListItem>
              <ListItem>
                <Typography mode="b-text">this</Typography> keyword's value
                depends on how the function was called.
              </ListItem>
            </List>
          </ListItem>
        </MotionList>
        <Typography mode="h6">Eval Execution Context (Rarely Used):</Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            Created when <Typography mode="b-text">eval()</Typography> function
            is executed (not recommended to use).
          </ListItem>
          <ListItem>
            It works like a{' '}
            <Typography mode="b-text">function execution context </Typography>{' '}
            but is rarely used because of{' '}
            <Typography mode="b-text">security risks</Typography>.
          </ListItem>
        </MotionList>
        <Typography>
          At the start of program execution, a Global Execution Context (GEC) is
          created. As the program runs, if a function invocation is encountered
          (like first()), a Function Execution Context (FEC) is created on top
          of the Global Execution Context. While executing the statements inside
          first(), if another function invocation (like second()) is found, a
          new Function Execution Context is created on top of the previous one.
          This process continues for every function call. Once all the
          statements inside a function are executed, its execution context is
          removed from the call stack, and control returns to the previous
          execution context. This process repeats for each function until all
          execution contexts are cleared. Finally, once all the code is
          executed, the Global Execution Context is also removed from the call
          stack.
        </Typography>
        <motion.div
          initial={{ opacity: 0, marginLeft: 100 }}
          whileInView={{ opacity: 1, marginLeft: 0 }}
          transition={{ duration: 0.75 }}
          className="flex bg-gray-700 justify-center items-center rounded-md flex-col p-4 w-5/12 mb-4"
        >
          <div className="border border-sky-600">
            <div>
              <div className="text-center p-2 mb-2 perspactive-container">
                <div className="bg-red-600 font-bold p-2 px-4 mb-4 tilt cursor-pointer">
                  Execution Context
                  <br /> third()
                </div>
                <div className="bg-yellow-600 font-bold p-2 px-4 mb-4 tilt cursor-pointer">
                  Execution Context
                  <br /> second()
                </div>
                <div className="bg-green-600 font-bold p-2 px-4 mb-4 tilt cursor-pointer">
                  Execution Context
                  <br /> first()
                </div>
                <div className="bg-teal-600 font-bold p-2 px-4 tilt cursor-pointer">
                  Global Execution Context
                </div>
              </div>
            </div>
            <div className="bg-sky-600 p-2 px-6 text-center font-bold">
              Execution Stack
            </div>
          </div>
        </motion.div>
      </>
    )
  },
  {
    id: 'js-2.7',
    next: '/javascript/js-2.8',
    prev: '/javascript/js-2.6',
    title: 'Event Loop',
    content: (
      <>
        <Typography mode="h2">
          Event <Typography mode="gradient">Loop</Typography>
        </Typography>
        <Typography>
          Event loop is the Javascript's magic mechanism that allows the
          Javascript to act like a multi-threaded languange, even though{' '}
          <Typography mode="b-text">
            it is a single-threaded language.{' '}
          </Typography>
          It is a fundamental concept in JavaScript, crucial to understanding
          how asynchronous operations work in the language. It is responsible
          for handling and executing tasks, events, and asynchronous code in a
          non-blocking manner, enabling JavaScript to remain single-threaded
          while handling multiple tasks concurrently.
        </Typography>
        <Typography mode="h6">
          Let's have a look at how the event loop works...
        </Typography>
        <Typography>
          JavaScript starts executing synchronous code line by line, pushing
          function calls onto the call stack and popping them off once complete.
          When an asynchronous operation (e.g., setTimeout or a fetch request)
          is encountered, it is handed off to the Web APIs or the Node.js
          equivalent. Once the operation completes, its associated callback is
          added to the appropriate queue. After all microtasks are handled, it
          moves to the callback queue and processes one task at a time.
        </Typography>
        <Typography>
          The event loop continuously checks if the call stack is empty. If the
          stack is empty, the event loop picks the first task from the microtask
          queue (e.g., resolved Promises) and executes it. The event loop
          repeats this process, ensuring JavaScript remains responsive.
        </Typography>
        <Typography mode="h6">
          Let's learn the main components of the event loop...
        </Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Call Stack:</Typography> A stack data
            structure that keeps track of function calls. Functions are pushed
            onto the stack when invoked and popped off when they return.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Web APIs:</Typography> These are
            browser-provided APIs (e.g., setTimeout, DOM events, HTTP requests)
            that handle asynchronous tasks.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">
              Callback Queue (or Task Queue):
            </Typography>{' '}
            A queue where callbacks from completed asynchronous operations are
            placed, waiting to be executed.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Microtask Queue:</Typography> A special
            queue for high-priority tasks like Promises and MutationObserver
            callbacks.
          </ListItem>
        </MotionList>
        <Typography mode="h6">Execution Order</Typography>
        <Typography>
          The event loop prioritizes{' '}
          <Typography mode="b-text">microtasks</Typography> over{' '}
          <Typography mode="b-text">macrotasks</Typography> (tasks in the
          callback queue):
        </Typography>
        <MotionList className="text-gray-300 mb-4">
          <ListItem>
            <Typography mode="b-text">Microtasks: </Typography> Include Promise
            .then() handlers, queueMicrotask, and MutationObserver callbacks.
          </ListItem>
          <ListItem>
            <Typography mode="b-text">Macrotasks: </Typography> Include
            setTimeout, setInterval, and setImmediate.
          </ListItem>
        </MotionList>
        <Typography>
          Now below is a visual event loop explorer ({' '}
          <Links src="https://vault-developer.github.io/event-loop-explorer/">
            https://vault-developer.github.io/event-loop-explorer/
          </Links>{' '}
          ), Play with it to understand more about the event loop and
          asynchronous code execution process... Enjoy!
        </Typography>
        <motion.div className="w-full h-[600px]">
          <iframe
            src="https://vault-developer.github.io/event-loop-explorer/"
            title="event loop explorer"
            className="w-full h-[80vh]"
          ></iframe>
        </motion.div>
      </>
    )
  },
  {
    id: 'js-2.8',
    next: '/javascript/js-2.9',
    prev: '/javascript/js-2.7',
    title: 'Scope',
    content: (
      <>
        <Typography mode="h2">
          JavaScript <Typography mode="gradient">Scope</Typography>
        </Typography>
        <Typography mode="h6">What is Scope?</Typography>
        <Typography>
          Scope is a fundamental concept in programming languages that underpins
          the behavior of variables, functions, and other declarations in any
          programming languanges.
        </Typography>
        <Typography>
          Scope refers to the visibility and accessibility of variables,
          functions, and other declarations in a programming language. It
          determines how a variable, function, or other entity can be accessed
          and used within different parts of a program.
        </Typography>

        <Typography>
          At its core, scope in JavaScript refers to the context or environment
          in which variables are declared and can be accessed. It dictates the
          visibility and lifetime of a variable, determining where in your code
          a particular variable is valid and accessible.
        </Typography>
        <Typography>
          Each binding (variables, functions, and other declarations) has a
          scope, which is the part of the program in which the binding is
          visible.{' '}
          <Typography mode="b-text">
            For bindings definde outside of any function or block, the scope is
            the whole program, you can refer to such bindings wherever you want
          </Typography>
          . These are called{' '}
          <Typography mode="b-text">global bindings</Typography>.
        </Typography>
        <Typography>
          <Typography mode="b-text">
            But bindings created for function parameters or declared inside a
            fucntion or block can be referenced only within that function or
            block
          </Typography>
          . These are called{' '}
          <Typography mode="b-text">local bindings</Typography>.
        </Typography>
        <AlertBox mode="info">
          <Typography className="!mb-0">
            <Typography mode="b-text" className="!text-blue-400">
              Bindings: Declarations such as variables, functions and other
              decalarations are called bindings.
            </Typography>
          </Typography>
        </AlertBox>
        <Typography>Let's learn about different types of scope...</Typography>
        <Typography mode="h6">Global Scope</Typography>
        <Typography>
          In JavaScript, global scope is the widest scope available. Variables
          declared in global scope are accessible from anywhere in your code,
          whether it's inside functions, conditional statements, loops, or other
          blocks of code. You can think of global scope as the "public square"
          of your program, where everyone can see and access what's going on.
        </Typography>
        <Typography>
          Everything you declare in global scope is like putting up a billboard
          in the square for everyone to see. Any function or code block within
          your program can read and modify these global variables.
        </Typography>

        <Typography mode="h6">Local Scope</Typography>
        <Typography>
          Local scope in JavaScript is like a private room within a building –
          it's an enclosed space where variables are only accessible from within
          that specific room. When you declare a variable in local scope, it is
          limited in visibility to the block of code, function, or conditional
          statement in which it is defined.
        </Typography>
        <Typography>
          Let's say you've declared variables in a function, now every time the
          function is called, new instances of these variables are created. This
          provides some isolation between functions. Each function call acts in
          its own little world (it's local environement) and can often be
          understood without knowing a lot about what's going on in the global
          environment.
        </Typography>
      </>
    )
  }
]

//https://crystallize.com/answers/tech-dev/compiling-vs-transpiling
