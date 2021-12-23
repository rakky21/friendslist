<<<<<<< HEAD
const { Thought, Pizza } = require('../models');

// reply = reaction, Thought = thought
const thoughtController = {
  // add Thought to pizza
=======
const { Thought, User } = require('../models');

const thoughtController = {
  // add Thought to User
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
  addThought({ params, body }, res) {
    console.log(params);
    Thought.create(body)
      .then(({ _id }) => {
<<<<<<< HEAD
        return Pizza.findOneAndUpdate(
          { _id: params.pizzaId },
          { $push: { comments: _id } },
          { new: true }
        );
      })
      .then(dbPizzaData => {
        console.log(dbPizzaData);
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
=======
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
      })
      .catch(err => res.json(err));
  },

  // add reply to Thought
  addReply({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
<<<<<<< HEAD
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
=======
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
      })
      .catch(err => res.json(err));
  },

  // remove Thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No Thought with this id!' });
        }
<<<<<<< HEAD
        return Pizza.findOneAndUpdate(
          { _id: params.pizzaId },
          { $pull: { comments: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
=======
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
      })
      .catch(err => res.json(err));
  },
  // remove reply
  removeReply({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
<<<<<<< HEAD
      .then(dbPizzaData => res.json(dbPizzaData))
=======
      .then(dbUserData => res.json(dbUserData))
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36
      .catch(err => res.json(err));
  }
};

module.exports = thoughtController;
