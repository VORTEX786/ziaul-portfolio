import { mutation } from "./_generated/server";

export const seedProjects = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if projects already exist
    const existingProjects = await ctx.db.query("projects").collect();
    if (existingProjects.length > 0) {
      return "Projects already seeded";
    }

    const projects = [
      {
        title: "AI Chat Assistant",
        description: "A conversational AI built with machine learning that can answer questions and provide helpful responses.",
        technology: "Python, TensorFlow, Natural Language Processing",
        category: "Artificial Intelligence",
        featured: true,
        githubUrl: "https://github.com/mohammedziaul/ai-chat-assistant",
        imageUrl: "🤖"
      },
      {
        title: "Weather Prediction Model",
        description: "Machine learning model that predicts weather patterns using historical data and neural networks.",
        technology: "Python, Scikit-learn, Pandas, NumPy",
        category: "Machine Learning",
        featured: true,
        githubUrl: "https://github.com/mohammedziaul/weather-prediction",
        imageUrl: "🌤️"
      }
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return "Projects seeded successfully";
  },
});
