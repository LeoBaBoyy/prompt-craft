export const artPrompts = {
  styleExploration: ({ subject, style }) =>
    `Create an image of ${subject} in the style of ${style}. Focus on atmosphere, lighting, and composition. Avoid text overlays.`,

  variationSet: ({ subject, count = 4 }) =>
    `Generate ${count} distinct visual interpretations of "${subject}". Vary composition, color palette, and mood while keeping the core idea recognizable.`,

  detailedScene: ({ subject, mood, lighting }) =>
    `Illustrate ${subject}. Mood: ${mood}. Lighting: ${lighting}. Emphasize depth, texture, and storytelling details.`,
};
