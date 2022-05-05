const router = require('express').Router();
const { Member } = require('../../models');

router.post('/signup', async (req, res) => {
// console.log(req.body)
  try {
    const UserData = await Member.create(req.body);
    console.log(UserData)
    req.session.save(() => {
      req.session.member_id = UserData.id;
      req.session.logged_in = true;
      res.status(200).json(UserData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const memberData = await Member.findOne({ where: { email: req.body.email } });

    if (!memberData) {
      res
        .status(400)
        .json({ message: 'Invalid email, please try again' });
      return;
    }

    const acceptedPassword = await memberData.checkPassword(req.body.password);

    if (!acceptedPassword) {
      res
        .status(400)
        .json({ message: 'Invalid password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.logged_in = true;
      
      res.json({ member: memberData, message: 'You are now logged in!' });
    });


  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
