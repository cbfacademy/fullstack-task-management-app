module.exports = {
    get: jest.fn((url) => {
        return Promise.resolve({
            data: [
                {
                  id: 1,
                  title: 'Schedule Meeting',
                  description: 'Schedule a 3-amigo session for Monday 11th of October',
                  completed: false
                },
                {
                  id: 2,
                  title: 'Contract tests',
                  description: 'Write provider contract tests for the new version of our API',
                  completed: false
                }
            ]
        })
    }),

    post: jest.fn((url, data) => {
        return Promise.resolve({
            status: 201
        })
    })
};