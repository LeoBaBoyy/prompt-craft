export const refinementPrompts = {
  enhance: (aspect) =>
    `Improve the ${aspect} of this image while preserving the main subject and composition. Make the result feel more polished and intentional.`,

  fixIssues: (issues) =>
    `Address the following issues in this design/image: ${issues}. Keep the overall style consistent.`,

  upscaleDetail: () =>
    `Enhance fine details and sharpness while maintaining natural textures and avoiding over-processing artifacts.`,
};
