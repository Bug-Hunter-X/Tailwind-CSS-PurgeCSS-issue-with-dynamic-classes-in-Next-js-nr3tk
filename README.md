# Tailwind CSS PurgeCSS Issue with Dynamic Classes in Next.js

This repository demonstrates a common issue encountered when using Tailwind CSS with Next.js: PurgeCSS failing to remove unused styles due to dynamically generated class names.  The issue results in larger-than-necessary CSS bundles, impacting performance.

## Problem

The `bug.js` file contains a Next.js component that dynamically generates Tailwind CSS classes.  PurgeCSS, Tailwind's default mechanism for removing unused styles, is unable to identify these dynamic classes, leading to bloated CSS.

## Solution

The `bugSolution.js` file provides a solution using the `@apply` directive or a custom PurgeCSS configuration to explicitly include or define the dynamic classes, enabling PurgeCSS to accurately remove the unused styles. See the comments in the code for details.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Inspect the generated CSS bundle to observe the effect of the bug and the fix.