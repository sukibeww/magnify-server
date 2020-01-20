const Vacancy = require('../../models/Vacancy');

describe('Vacancy', () => {

  const newJob = new Vacancy({
    title: "Developer Extraordinaire",
    description: "Do everything we ask you to do no questions asked",
  });

  it('exits', () => {
    expect(newJob).toBeDefined();
  })
})