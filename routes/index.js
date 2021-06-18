var express = require('express');
var router = express.Router();
const Subscribe = require('../models/subscribe.js')
const Contact = require('../models/contact.js')


router.post('/subscribe', function(req, res, next) {
  console.log('subscribe[params]', req.body)
  const newSubscribe = new Subscribe({ email: req.body[0].value})
  newSubscribe.save()
  res.status(200).send({ status: 'ok', text: 'Красавчик' })
});

router.post('/contact', function(req, res, next) {
  console.log('contact[params]', req.body)
  const params = {};
  for(const i of req.body) {
    params[i.name] = i.value
  }
  const newContact = new Contact(params)
 newContact.save()
  .then((result) => {
    res.status(200).send({ status: 'ok', reqult })
  })
  .catch((error) => {
    res.status(400).send({ status: 'error', error })
  })
});


module.exports = router;
