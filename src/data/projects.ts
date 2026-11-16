export interface Project {
  name: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'MicroCC',
    category: 'Compiler engineering',
    description: 'A tiny C compiler written in C++. From tokenization and parsing to variables, control flow, and eventually executable programs.',
    stack: ['C++', 'CMake', 'Parsing'],
    status: 'In progress',
    repo: 'https://github.com/JarronAnt/MicroCC',
    featured: true,
  },
  {
    name: 'OptForge',
    category: 'LLVM / optimizations',
    description: 'An LLVM learning playground for understanding intermediate representations, transformation passes, and compiler optimization.',
    stack: ['C++', 'LLVM', 'CMake'],
    status: 'In progress',
    featured: true,
  },
  {
    name: 'ASCII Universe',
    category: 'Simulation / game systems',
    description: 'A Dwarf Fortress-inspired simulation with an ECS, pathfinding, procedural world generation, and layered world systems.',
    stack: ['C++20', 'EnTT', 'SDL2'],
    status: 'Ongoing',
    repo: 'https://github.com/JarronAnt/ascii-universe',
    featured: true,
  },
  {
    name: 'Go-Tiny',
    category: 'Compiler engineering',
    description: 'A small source-to-source compiler built in Go, exploring the fundamentals of language processing and code generation.',
    stack: ['Go', 'Compilers'],
    status: 'Repository',
    repo: 'https://github.com/JarronAnt/Go-Tiny',
  },
  {
    name: 'Rusty8',
    category: 'Emulation',
    description: 'A CHIP-8 emulator in Rust, focused on instruction decoding, memory organization, and virtual machine execution.',
    stack: ['Rust', 'Emulation'],
    status: 'Repository',
  },
  {
    name: 'LC-3 VM',
    category: 'Virtual machines',
    description: 'An LC-3 virtual machine written in C, exploring registers, instructions, memory, and the execution cycle.',
    stack: ['C', 'Virtual Machines'],
    status: 'Repository',
    repo: 'https://github.com/JarronAnt/LC3-VM',
  },
];
