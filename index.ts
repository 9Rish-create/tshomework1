
import { usersArray } from './users';
import { usersInfoArray } from './userInfo';


interface UserPosition {
  name: string;
  position: string;
  age: number;
  gender: 'man' | 'woman';
}


function getUsersJobPositions(users: User[]): UserPosition[] {
  return users.map(user => {
    const info = usersInfoArray.find(u => u.userid === user.userid);
    if (info) {
      return {
        name: info.name,
        position: info.organization.position,
        age: info.age,
        gender: user.gender
      };
    } else {
      
      return {
        name: user.name,
        position: 'Unknown',
        age: 0,
        gender: user.gender
      };
    }
  });
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);