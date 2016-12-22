export default (mongoose, Schema) => {

    const User = mongoose.model('User', new Schema({ 
                                                username: String, 
                                                password: String, 
                                                admin: Boolean,
                                                created_date: Date 
                                            }));                                            
    return User;
}