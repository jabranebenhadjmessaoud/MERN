import express from 'express' ;
import {faker} from '@faker-js/faker'
const app=express() ;
const port=8000 ;

console.log("hello from the server");

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName (),
        _id: faker.string.uuid()
    };
    return newUser;
};
const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{ 
            street:faker.location.streetAddress(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country()
        }
        
    };
    return newCompany;
};
app.get("/api/users/new",(req,res) =>{
    res.json(createUser());
})
app.get("/api/companies/new",(req,res) =>{
    res.json(createCompany());
})
app.get("/api/user/company",(req,res) =>{
    const us=createUser()
    const com=createCompany()
    console.log(us);
    console.log(com);
    res.json({us , com});
})















app.listen( port, () => console.log(`Listening on port: ${port}`) );