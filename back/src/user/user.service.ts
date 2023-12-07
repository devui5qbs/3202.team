import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private timeoutId: NodeJS.Timeout | null = null;
  private users = [
    {
      email: 'jim@gmail.com',
      number: '221122',
    },
    {
      email: 'jam@gmail.com',
      number: '830347',
    },
    {
      email: 'john@gmail.com',
      number: '221122',
    },
    {
      email: 'jams@gmail.com',
      number: '349425',
    },
    {
      email: 'jams@gmail.com',
      number: '141424',
    },
    {
      email: 'jill@gmail.com',
      number: '822287',
    },
    {
      email: 'jill@gmail.com',
      number: '822286',
    },
  ];

  async findOne(email: string, number: string) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    return new Promise((resolve, reject) => {
      this.timeoutId = setTimeout(() => {
        const user = this.users.find(
          (user) => user.email === email && (!number || user.number === number),
        );
        if (!user) {
          reject(new NotFoundException('User not found'));
        } else {
          resolve(user);
        }
      }, 5000);
    });
  }
}
