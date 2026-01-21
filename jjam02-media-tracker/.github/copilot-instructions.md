# Copilot Instructions for jjam02-media-tracker

## Project Overview
This project is a media tracking application built with React, TypeScript, and Vite. It utilizes Tailwind CSS for styling and follows a component-based architecture.

## Architecture
- **Components**: The application is structured around reusable components such as `Header`, `MediaFormModal`, `MediaGrid`, and `MediaCard`. Each component is responsible for a specific part of the UI.
- **Data Flow**: The main data structure is defined in `src/types/media.ts`, which outlines the properties of media items. Components like `MediaGrid` and `MediaCard` utilize this structure to display media information.
- **State Management**: Local state is managed using React's `useState` hook, particularly in `MediaFormModal` for controlling modal visibility.

## Developer Workflows
- **Development**: Use the command `npm run dev` to start the development server with hot module replacement (HMR).
- **Building**: Run `npm run build` to compile the application for production.
- **Linting**: Use `npm run lint` to check for code quality and adherence to defined ESLint rules.
- **Preview**: After building, use `npm run preview` to serve the production build locally.

## Project Conventions
- **File Structure**: Components are organized in the `src/components` directory, with each component in its own file. Type definitions are stored in `src/types`.
- **Styling**: Tailwind CSS is used for styling, with utility classes applied directly in JSX. Custom styles can be defined in separate CSS files.
- **TypeScript**: The project uses TypeScript for type safety. Ensure to define types for props and state where applicable.

## Integration Points
- **External Dependencies**: The project relies on several key libraries:
  - `react` and `react-dom` for building the UI.
  - `vite` for the build tool and development server.
  - `@tailwindcss/vite` for integrating Tailwind CSS.

## Cross-Component Communication
- Components communicate primarily through props. For example, `MediaFormModal` passes the `onClose` function to `MediaForm` to handle modal closure.

## Examples
- **Adding Media**: The `MediaFormModal` component demonstrates how to open a modal for adding new media items. It uses `createPortal` to render the modal outside the main DOM hierarchy.
- **Displaying Media**: The `MediaGrid` component maps over a list of media items and renders a `MediaCard` for each item, showcasing how to display dynamic data.

## Conclusion
These instructions should help AI coding agents understand the structure and workflows of the jjam02-media-tracker project, enabling them to assist effectively in development tasks.