# TikTok User Profile Card

A lightweight web dashboard component designed to display and dynamically update local user profile metadata. The product provides interactive fields allowing users to modify profile parameters in real-time without reloading the document.

## Product Specification

### Component Architecture
- **Structure:** Semantic DOM header module acting as a localized profile card widget.
- **Styling:** Highly stylized UI featuring vibrant neon accent hues (`#ff4e00`), customized text shadows, layout centering, and micro-interaction scales.
- **Behavior:** Event-driven logic utilizing interactive structural components to handle input data validations and mutate DOM states.

### Core Modules
- **Profile Identity Module:** Displays user handle and platform tag. Includes a click-triggered event listener that launches input fields for username updates with built-in empty string validation.
- **Game Metrics Module:** Displays custom Matchmaking Rating (MMR) data. Features type-checking filters to ensure data entries remain strictly numeric before updating the DOM state.

### Interactive States
- **Hover State:** Smooth `1.10x` card expansion across a `1s` transition curve indicating operational interactivity.
- **Active State:** Tactile `0.90x` scale compression upon physical selection clicks.
- **Validation Fallbacks:** Built-in alert dialogue filters preventing accidental resource wipes or unintended data type injections.

## Deployment

### Prerequisites
A standard modern web browser engine supporting ECMAScript 6 runtime methods (`parseInt`, `isNaN`, `Number`) and CSS3 spatial transform properties.

### File Architecture
The implementation requires deploying the codebase structure across three separate product files:
- `index.html` (Markup Blueprint)
- `style.css` (Visual Design Sheet)
- `script.js` (State Logic Engine)
