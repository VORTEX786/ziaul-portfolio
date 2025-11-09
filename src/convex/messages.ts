import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

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

    // Send email notification asynchronously
    await ctx.scheduler.runAfter(0, internal.sendEmails.sendContactNotification, {
      name: args.name,
      email: args.email,
      message: args.message,
    });

    return messageId;
  },
});

export const markAsRead = mutation({
  args: { id: v.id("messages") },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { read: true });
  },
});