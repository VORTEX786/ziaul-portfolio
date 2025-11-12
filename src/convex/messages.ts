import { query, mutation, internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").order("desc").collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      ...args,
      read: false,
    });

    // Schedule email notification
    await ctx.scheduler.runAfter(
      0,
      // @ts-ignore - Convex type inference issue with scheduler
      (await import("./_generated/api")).internal.sendEmails.sendContactNotification,
      {
        name: args.name,
        email: args.email,
        message: args.message,
      }
    );

    return messageId;
  },
});

export const markAsRead = mutation({
  args: { id: v.id("messages") },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { read: true });
  },
});