
export async function verifyUser(email, password) {
   
    const users = [
      { email: 'user@example.com', password: 'password123' }
    ];
  
    const user = users.find(user => user.email === email && user.password === password);
    return user;
  }
  