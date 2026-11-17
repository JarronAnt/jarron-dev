export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  milestone: string;
  repo: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
  architecture: string;
  next: string[];
}

export const projects: Project[] = [
  {
    slug: 'microcc', name: 'MicroCC', category: 'Compiler engineering',
    description: 'An educational C compiler written in modern C++ that generates native AArch64 assembly for Apple Silicon.',
    stack: ['C++20', 'CMake', 'AArch64', 'CTest'], status: 'In progress', milestone: 'Phase 3 complete',
    repo: 'https://github.com/JarronAnt/MicroCC', featured: true,
    summary: 'MicroCC compiles a growing subset of C to native AArch64 assembly on Apple Silicon. Phase 3 adds local int variables, lexical scopes, assignments, conditional statements, and loops on top of the existing expression compiler.',
    highlights: ['Lexer with source positions and longest-match operators', 'Recursive-descent parser and uniquely owned AST nodes', 'Arithmetic, comparison, bitwise, logical, shift, conditional and comma expressions', 'Correct short-circuiting via conditional ARM64 branches', 'Native macOS Mach-O executable generation and assembly-only mode', 'Phase 3 local variable support, stack frames, and shared return epilogue', 'Nested blocks, shadowing, if/else, while, do-while, and for loops', 'Compound assignments, increment/decrement, break, and continue', 'CTest integration coverage for valid programs and invalid C diagnostics'],
    architecture: 'C source → Lexer → Parser → AST → AArch64 codegen → Apple Clang (assemble/link)',
    next: ['Function parameters, calls, and richer C types', 'Pointers, arrays, and more complete C semantics', 'Later: IR, optimization, and register allocation'],
  },
  {
    slug: 'optforge', name: 'OptForge', category: 'LLVM / optimization',
    description: 'An out-of-tree LLVM New Pass Manager optimization plugin built to study IR transformations and compiler correctness.',
    stack: ['C++17', 'LLVM 22', 'CMake', 'FileCheck'], status: 'In progress', milestone: 'Phase 1 complete',
    repo: 'https://github.com/JarronAnt/OptForge', featured: true,
    summary: 'Phase 1 implements optforge-simplify, a function-level algebraic identity pass for scalar integer LLVM IR. It loads with opt and has automated IR-output checks and verification.',
    highlights: ['New Pass Manager plugin registered as optforge-simplify', 'Identity rewrites for add/sub/mul, bitwise, shifts, and division by one', 'LLVM 22-specific build with CMake and Ninja', 'Loadable plugin tested with the opt command-line tool', 'FileCheck assertions and LLVM IR verification', 'Separate tests for identity transformations and safety'],
    architecture: 'Input LLVM IR → Function pass (optforge-simplify) → Verified optimized LLVM IR',
    next: ['Constant folding, propagation, and dead-code elimination', 'Local value numbering and common subexpression elimination', 'Later: control-flow, global analyses, loops, and benchmarks'],
  },
  {
    slug: 'ascii-universe', name: 'ASCII Universe', category: 'Simulation engineering',
    description: 'A C++20, ECS-based fortress simulation with layered worlds, autonomous workers, resource logistics, and construction.',
    stack: ['C++20', 'EnTT', 'SDL3', 'A*', 'JSON'], status: 'In progress', milestone: 'Phase 6 complete',
    repo: 'https://github.com/JarronAnt/ascii-universe', featured: true,
    summary: 'Six completed major phases plus a world-generation expansion have produced a playable fortress foundation: deterministic terrain, jobs, excavation, material-aware items, stockpiles, hauling, building, and persistent state.',
    highlights: ['3D Z-level tile volume with ramps and stairs', 'Autonomous worker jobs and cross-Z-level A* pathfinding', 'Procedural climate, geology, rivers, forests, and caverns', 'Resource items with exact materials, stockpiles, and reservations', 'Walls, floors, stairs, ramps, delivery jobs, and builders', 'Versioned JSON save/load with Phase 6 migration and SDL3 ASCII frontend'],
    architecture: 'Player intent → Designation / plan → Jobs → Workers → ECS systems → World state → SDL3',
    next: ['Phase 7 workshops, crafting, and industry', 'Expanded professions, needs, and colony dynamics', 'Long-term world history and civilization simulation'],
  },
  {
    slug: 'rusty8', name: 'Rusty8', category: 'Emulation / systems',
    description: 'A CHIP-8 interpreter in Rust with an isolated emulator core and an SDL2 desktop frontend.',
    stack: ['Rust', 'CHIP-8', 'SDL2'], status: 'Completed', milestone: 'Project complete',
    repo: 'https://github.com/JarronAnt/Rusty8', featured: true,
    summary: 'Rusty8 models the small CHIP-8 virtual machine in Rust, including CPU state, RAM, display, timers, keypad, instruction decoding, and a desktop application that loads ROMs.',
    highlights: ['4 KiB RAM, 16 registers, 16-entry call stack, index register, program counter', '64 × 32 display, font ROM, and XOR sprite collision handling', 'Two-byte opcode fetch/decode/execute loop', 'Arithmetic, memory, skip, jump, call, drawing, and key instructions', 'SDL2 keyboard mapping, scaled display, and ROM loading', 'Timer-state support; audio playback and compatibility hardening remain possible polish'],
    architecture: 'CHIP-8 ROM → Interpreter core (fetch / decode / execute) ↔ SDL2 input + display',
    next: ['Fix the desktop framebuffer Y-index calculation (divide by SCREEN_WIDTH)', 'Optional improvements: compatibility test ROMs and safer bounds handling', 'Optional audio output and decoupled timer scheduling'],
  },
  {
    slug: 'go-tiny', name: 'Go-Tiny', category: 'Language tooling',
    description: 'An educational source-to-source compiler in Go exploring language processing and code transformation.',
    stack: ['Go', 'Compilers'], status: 'Repository', milestone: 'Existing project',
    repo: 'https://github.com/JarronAnt/Go-Tiny',
    summary: 'A smaller language tooling project that complements MicroCC and OptForge with an alternate compiler implementation language.',
    highlights: ['Source-to-source compilation', 'Language processing in Go'],
    architecture: 'Input source → Parsing / transformation → Output source',
    next: ['Write a dedicated technical breakdown once the current repository has been reviewed in depth'],
  },
  {
    slug: 'lc3-vm', name: 'LC-3 VM', category: 'Virtual machines',
    description: 'A virtual machine implementation in C exploring memory, instruction decoding, register state, and execution.',
    stack: ['C', 'Virtual Machines'], status: 'Repository', milestone: 'Existing project',
    repo: 'https://github.com/JarronAnt/LC3-VM',
    summary: 'A low-level virtual machine experiment focused on the execution model of a small instructional architecture.',
    highlights: ['C-based execution engine', 'Register and instruction-set fundamentals'],
    architecture: 'Machine code → Fetch / decode / execute → VM state',
    next: ['Add a code-grounded implementation write-up'],
  },
];
