searchState.loadedDescShard("wasmtime_jit_debug", 0, "The GDB’s JIT compilation interface. The low level …\nSupport for jitdump files which can be used by perf for …\nRegisteration for JIT image\nJIT image used in registration\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRegisters JIT image using __jit_debug_register_code\nThe CodeLoadRecord is used for describing jitted functions\nDescribes source line information for a jitted function\nDescribes debug information for a jitted function. An …\nFixed-sized header for each jitdump file\nValue 2: JIT_CODE_DEBUG_INFO: record describing the debug …\nValue 0: JIT_CODE_LOAD: record describing a jitted function\nInterface for driving the creation of jitdump files\nEach record starts with this fixed size record header …\nDefines jitdump record types\nValue 3: JIT_CODE_CLOSE: record marking the end of the jit …\nValue 1: JIT_CODE_MOVE: record describing an already …\nValue 4: JIT_CODE_UNWINDING_INFO: record describing a …\n<code>uint64_t code_addr</code>: code start address for the jitted …\n<code>uint64_t code_addr</code>: address of function for which the …\n<code>uint64_t code_addr</code>: address of function for which the …\n<code>uint64_t nr_entry</code>: number of debug entries for the …\n<code>uint32_t discrim</code>: column discriminator, 0 is default\n<code>uint32_t elf_mach</code>: ELF architecture encoding (ELF …\n<code>char name[n]</code>: source file name in ASCII, including null …\n<code>uint64_t flags</code>: a bitmask of flags\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns timestamp from a single source\nFixed sized header that describes this record\nFixed sized header that describes this record\nuint32_t id: a value identifying the record type (see …\n<code>uint64_t code_index</code>: unique identifier for the jitted code …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>uint32_t line</code>: source file line number (starting at 1)\n<code>uint32_t magic</code>: a magic number tagging the file type. The …\nIntialize a JitDumpAgent and write out the header\nReturns the next code index\n<code>uint32_t pad1</code>: padding. Reserved for future use\n<code>uint32_t pid</code>: OS process id of the runtime generating the …\n<code>uint32_t pid</code>: JIT runtime process identification (OS …\nuint32_t total_size: the size in bytes of the record …\n<code>uint64_t code_size</code>: size in bytes of the generated jitted …\n<code>uint32_t total_size</code>: size in bytes of file header\n<code>uint32_t tid</code>: OS thread identification of the runtime …\nuint64_t timestamp: a timestamp of when the record was …\n<code>uint64_t timestamp</code>: timestamp of when the file was created\n<code>uint32_t version</code>: a 4-byte value representing the format …\n<code>uint64_t vma</code>: virtual address of jitted code start\nWrite DebugInfoRecord to open jit dump file. Must be …\nWrite DebugInfoRecord to open jit dump file. Must be …")