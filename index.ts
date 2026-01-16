// index.ts
import { usersArray } from './users';
import { usersInfoArray } from './userInfo';

// Объявляем интерфейс для возвращаемого объекта
interface UserPosition {
  name: string;
  position: string;
  age: number;
  gender: 'man' | 'woman';
}

// функция для получения массива нужных объектов
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
      // на случай, если info не найден
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