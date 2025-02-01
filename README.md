# TypeScript Type Error: Mixed-Type Array

This repository demonstrates a common TypeScript type error that arises when passing an array containing mixed data types (e.g., numbers and strings) to a function that expects a strictly typed array (e.g., an array of numbers).

## The Problem

The `bug.ts` file contains a function `printArray` that expects an array of numbers (`number[]`). However, when an array containing both numbers and strings is passed to this function, TypeScript's type safety will not catch the error at compile time, leading to a potential runtime error.

## The Solution

The `bugSolution.ts` file provides a solution by using type guards or by changing the function signature to accommodate the mixed type array.  This ensures that type safety is maintained in TypeScript without sacrificing functionality.