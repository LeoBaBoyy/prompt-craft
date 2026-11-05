export const uiPrompts = {
  componentIdeas: (componentType) =>
    `Suggest 5 modern variations of a ${componentType} component. Include layout ideas, interaction states, and accessibility considerations.`,

  layoutCritique: (description) =>
    `Review this layout: ${description}. Point out hierarchy issues, spacing problems, and opportunities to improve clarity and visual flow.`,

  designSystem: (productType) =>
    `Propose a minimal design system for a ${productType} product. Include color roles, typography scale, spacing tokens, and core components.`,
};
