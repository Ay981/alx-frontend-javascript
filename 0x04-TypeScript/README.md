# ALX Advanced TypeScript Project

This repository contains a series of TypeScript exercises completed as part of the ALX Software Engineering curriculum. The tasks cover a range of fundamental and advanced TypeScript concepts, from basic interfaces and classes to more complex topics like declaration merging, ambient namespaces, and branded types.

## Table of Contents

- [Task 1: Foundations: Interfaces, Functions, and Classes](#task-1-foundations-interfaces-functions-and-classes)
- [Task 2: Advanced Types and Type Guards](#task-2-advanced-types-and-type-guards)
- [Task 3: Ambient Namespaces and Declaration Files](#task-3-ambient-namespaces-and-declaration-files)
- [Task 4: Namespaces and Declaration Merging](#task-4-namespaces-and-declaration-merging)
- [Task 5: Branded Types for Type Safety](#task-5-branded-types-for-type-safety)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Author](#author)

---

## Task 1: Foundations: Interfaces, Functions, and Classes

**File:** `task_1/js/main.ts`

This task covers the creation of several core TypeScript elements to build a foundational understanding of the type system.

**Concepts Demonstrated:**
- **Interfaces (`Teacher`)** – Defining the shape of an object.
- **`readonly` properties** – Attributes that can only be set upon initialization.
- **Optional properties (`?`)** – Attributes that may or may not exist on an object.
- **Index Signatures (`[key: string]: any`)** – Allowing an object to have any number of additional, unspecified properties.
- **Extending Interfaces (`Directors`)** – Creating a new interface that inherits from another.
- **Function Interfaces (`printTeacherFunction`)** – Defining the signature for a function.
- **Class Implementation** – Writing a `StudentClass` with methods and properties.
- **Class and Constructor Interfaces** – Describing both the instance and static sides of a class.

## Task 2: Advanced Types and Type Guards

**File:** `task_2/js/main.ts`

This task focuses on using interfaces and classes to create different types of "employees" and includes functions that can differentiate between them at runtime.

**Concepts Demonstrated:**
- **Interface Implementation** – `Director` and `Teacher` classes implementing interfaces.
- **Factory Pattern (`createEmployee`)** – A function that returns different object types based on an input argument.
- **Union Types (`number | string`)** – Allowing a variable or parameter to be one of several types.
- **Type Predicates (`isDirector`)** – Runtime checks for narrowing types safely.
- **Type Guards** – Using a type predicate in an `if` statement to safely access properties.
- **String Literal Types (`type Subjects`)** – Restricting variables to specific string values.

## Task 3: Ambient Namespaces and Declaration Files

**Files:**
- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`
- `task_3/js/main.ts`

This task involves working with an external, untyped JavaScript library (`crud.js`). The goal is to provide type safety by creating a custom declaration file.

**Concepts Demonstrated:**
- **Type Aliases (`type RowID`)**
- **Ambient Declaration Files (`.d.ts`)**
- **Module Declarations** – Typing external modules.
- **Triple-Slash Directives (`/// <reference ... />`)**
- **Using Typed Third-Party Code**

## Task 4: Namespaces and Declaration Merging

**Files:**
- `task_4/js/subjects/Teacher.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/Java.ts`
- `task_4/js/subjects/React.ts`
- `task_4/js/main.ts`

This task explores how to organize code into namespaces and how TypeScript's declaration merging allows for extending existing interfaces across multiple files.

**Concepts Demonstrated:**
- **Namespaces (`namespace Subjects`)**
- **Declaration Merging**
- **Class Inheritance**
- **Multi-file Namespace Projects**

## Task 5: Branded Types for Type Safety

**File:** `task_5/js/main.ts`

This task introduces a powerful pattern for creating types that are structurally similar but should not be interchangeable.

**Concepts Demonstrated:**
- **Branded Types** – Using a unique property to differentiate types.
- **Type Assertion (`as MajorCredits`)**
- **Enhanced Type Safety**

---

## Setup and Installation

To run the code for any given task, navigate to the corresponding directory:

```bash
cd task_1  # Or task_2, task_3, etc.
```

Install the necessary development dependencies:

```bash
npm install
```

## Usage

Each task uses Webpack to compile the TypeScript files into a JavaScript bundle.

To build the project:

```bash
npm run build
```

This will generate a `dist/bundle.js` file. To run the output:

```bash
node dist/bundle.js
```

---

## Author

**Aymen Abdulkerim**
