const faker = require('faker')
const _ = require('underscore')
const Employee = require('../model/Employee')

function generateUsers() {
  let users = []
  for (let id = 1; id <= 10; id++) {
    let displayName = faker.name.firstName()
    let email = faker.internet.email()
    let category = _.sample([
      'Aerospace',
      'Transport',
      'Computer',
      'Telecommunication',
      'Agriculture',
      'Construction',
      'Education',
      'Pharmaceutical',
      'Food',
      'Health care',
      'Hospitality',
      'Entertainment',
      'News Media',
      'Energy',
      'Manufacturing',
      'Music',
      'Mining',
      'Worldwide web',
      'Electronics'
    ])
    let photos = faker.image.avatar()
    let bio = faker.lorem.paragraph()
    let rating = Math.floor(Math.random() * (100 - 10 + 1)) + 10
    users.push({
      displayName: displayName,
      email: email,
      linkedin_id: 'fake',
      photos: photos,
      category: category,
      bio: bio,
      rating: rating
    })
  }

  return users
}

const fakeUser = async (req, res) => {
  let data = generateUsers()
  let count = 1
  data.forEach(profile => {
    const updates = {
      displayName: profile.displayName,
      email: profile.email,
      linkedin_id: profile.linkedin_id,
      photos: profile.photos,
      category: profile.category,
      bio: profile.bio,
      score: { rating: profile.rating }
    }
    let d = new Employee(updates)
    d.save(err => {
      if (err) return err
      else {
        count < 10 ? count++ : res.send('seed')
      }
    })
  })
}

module.exports = { fakeUser }
