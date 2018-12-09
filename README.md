JavaScript: Understanding the Weird Parts - The First 3.5 Hours

Global Execution Context - 
  Global object: top level object in execution context, avaiable to all code inside 'window' in browser or 'global' in nodejs. 
  this: reference to current execution context
  
Exectuion Context Phase 1 and related stuff :
Creation Phase - execution context is created which results in the production of global object, this, outer environment and hoisting.
Hoisting - variables and functions are reserved in memory space. Variables are set to undefined
Undefined - special keyword which means JS engine has allocated memory to a variable which has no value yet. It DOES exist in memory, it just has no value yet

Exectuion Context Phase 2 and related stuff :
Runs code line by line

Single Threaded - One command at a time
Synchronous - One at a time, and in order

Invocation
  Every function creates a new execution context