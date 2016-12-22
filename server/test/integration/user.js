describe('User api integration tests', () => {
    const User = app.datasource.models.User;

    const defaultUser = {username : 'isabelle', password : 'isabelle', admin: true, created_date : Date.now()}

    
    beforeEach(done => {
        User
            .remove({})
            .then(() => {
                new User(defaultUser).save();
            })
            .then((err) => {
                if(!err)
                    done();
            });
    });    


    describe('Route GET /users', () => {
        it('should return a list of users', done => {
            request
                .get('/api/users')
                .end((err, res) => {
                    expect(res.body[0].username).to.be.equal(defaultUser.username);
                    expect(res.body[0].password).to.be.equal(defaultUser.password);
                    expect(res.body[0].admin).to.be.equal(defaultUser.admin);                             
                    
                    done(err);
                })
        });
    })
});