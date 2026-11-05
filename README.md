# Prompt Craft

A curated collection of high-quality prompt templates and workflows for creative AI tools and design applications.

## Why this exists

Good prompts make a huge difference in creative tools. This repo collects reusable, well-structured prompts for art generation, design refinement, style transfer, layout exploration, and more.

## Categories

- `art/` — Image generation & illustration
- `design/` — UI/UX and layout prompts
- `refinement/` — Improving existing outputs
- `workflows/` — Multi-step creative processes

## Example

```js
import { artPrompts } from './art/generation.js';

const prompt = artPrompts.styleExploration({
  subject: 'a quiet library at night',
  style: 'studio ghibli'
});
```

## Contributing

New prompt templates and improvements are welcome.

## License

MIT
