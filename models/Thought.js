const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

<<<<<<< HEAD
const ReplySchema = new Schema(
  {
    // set custom id to avoid confusion with parent Thought _id
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    replyBody: {
=======
const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent Thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
      type: String,
      required: true
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema(
  {
    writtenBy: {
      type: String,
      required: true
    },
    thoughtBody: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
<<<<<<< HEAD
    // use ReplySchema to validate data for a reply
    replies: [ReplySchema]
=======
    // use reactionSchema to validate data for a reaction
    replies: [ReactionSchema]
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

<<<<<<< HEAD
ThoughtSchema.virtual('replyCount').get(function() {
=======
ThoughtSchema.virtual('reactionCount').get(function() {
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
  return this.replies.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
