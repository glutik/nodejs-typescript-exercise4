import { Product, Category, User, UserCredential, UserRole } from '../models';

interface StoreType {
  // products: Product[];
  // categories: Category[];
  users: User[];
  credentials: UserCredential[];
}

const store: StoreType = {
  //   products: [
  //       {
  //           "id": "1bff90f0-a56e-11e9-9e3e-8953dc8ea618",
  //           "categoryId": "55563750-a56e-11e9-96ea-01dfbc6095ef",
  //           "name": "iRobot Roomba 980",
  //           "itemsInStock": 5
  //       },
  //       {
  //           "id": "1bffb800-a56e-11e9-9e3e-8953dc8ea618",
  //           "categoryId": "55563750-a56e-11e9-96ea-01dfbc6095ef",
  //           "name": "Xiaomi MiJia",
  //           "itemsInStock": 2
  //       }
  // ],
  //   categories: [
  //       {
  //           "id": "55563750-a56e-11e9-96ea-01dfbc6095ef",
  //           "name": "Robotic Vacuum Cleaners"
  //       },
  //       {
  //           "id": "08d36000-a583-11e9-a87a-ffc88b75d19f",
  //           "name": "Handheld Vacuum Cleaners"
  //       }
  //   ],
  users: [
    { id: 1, name: 'John Snow' },
    { id: 2, name: 'Sansa Stark' },
  ],
  credentials: [
    { email: 'a', password: 'a', userId: 1, roles: [UserRole.Reader] },
    { email: 'b', password: 'b', userId: 2, roles: [UserRole.Contributor] },
    { email: 'c', password: 'c', userId: 3, roles: [UserRole.Admin] },
  ],
};

export default store;
