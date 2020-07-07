const Subscriber = require('../Model/Subscriber.js');

const getSubscribeStatus = async (email) => {
  const subscribeStatus = await Subscriber.findOne({ email });

  if (subscribeStatus === null) {
    return false;
  }
  return true;
};

const addSubscriber = (req, res) => {
  console.log('incoming subscriber', req.body);
  try {
    getSubscribeStatus(req.body.email)
      .then(
        (result) => {
          if (result === false) {
            const subscriber = new Subscriber({
              // name: req.body.name,
              email: req.body.email,
            });

            subscriber.save()
              .then(() => {
                res.status(200).json('Thank you for subscribing');
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
          } else {
            res.status(400).json('This email is already subscribed.');
          }
        },
      );
  } catch (err) {
    console.log('error caught in subscriber controller');
  }
};

module.exports = {
  addSubscriber,
};