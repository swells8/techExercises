const request = require('supertest');

describe('Django API system test', () => {
  it('should return a list of employees', async () => {
    const res = await request('http://localhost:8000')
      .get('/posts/');
    console.log(res.body); 
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);


    expect(res.body.some(emp => emp.employee === 'Sydney')).toBe(true);
  });

  it('should ensure all employees have employee, department, and title fields', async () => {
  const res = await request('http://localhost:8000').get('/posts/');
  res.body.forEach(emp => {
    expect(emp).toHaveProperty('employee');
    expect(emp).toHaveProperty('department');
    expect(emp).toHaveProperty('title');
  });
});

  it('should return 404 for an invalid endpoint', async () => {
    const res = await request('http://localhost:8000').get('/invalid/');
    expect(res.statusCode).toBe(404);
  });


});