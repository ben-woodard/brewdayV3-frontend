import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-super-dashboard',
  templateUrl: './super-dashboard.component.html',
  styleUrl: './super-dashboard.component.css'
})
export class SuperDashboardComponent implements OnInit{

  constructor(

  ){}

  ngOnInit(): void {

    //FOR DEVELOPMENT DELETE UPON COMPLETE
    // const user: User = {
    //   id: 1,
    //   email: 'john.doe@example.com',
    //   password: 'password123',
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   company: {
    //     companyId: 1,
    //     companyName: 'Example Corp',
    //     users: [], // This would normally include references to user objects
    //     ingredients: [],
    //     orders: [],
    //     products: [],
    //     requestedUsers: []
    //   },
    //   requestedcompany: {
    //     companyId: 2,
    //     companyName: 'Requested Corp',
    //     users: [],
    //     ingredients: [],
    //     orders: [],
    //     products: [],
    //     requestedUsers: []
    //   },
    //   authorities: [
    //     {
    //       id: 1,
    //       authority: 'SUPER',
    //       user: {
    //         id: 1,
    //         email: 'john.doe@example.com',
    //         password: 'password123',
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         company: {
    //           companyId: 1,
    //           companyName: 'Example Corp',
    //           users: [],
    //           ingredients: [],
    //           orders: [],
    //           products: [],
    //           requestedUsers: []
    //         },
    //         requestedcompany: {
    //           companyId: 2,
    //           companyName: 'Requested Corp',
    //           users: [],
    //           ingredients: [],
    //           orders: [],
    //           products: [],
    //           requestedUsers: []
    //         },
    //         authorities: [] // Circular reference would typically be avoided
    //       }
    //     }
    //   ]
    // };

    // // Setting the user object in local storage
    // localStorage.setItem('user', JSON.stringify(user));
  }

}
