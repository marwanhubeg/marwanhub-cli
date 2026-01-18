const { execSync } = require('child_process');

describe('MarwanHub CLI Basic Tests', () => {
  test('should show help in Arabic', () => {
    const output = execSync('node bin/cli.js مساعدة', { encoding: 'utf8' });
    expect(output).toContain('مساعدة');
    expect(output).toContain('أوامر');
  });

  test('should show version', () => {
    const output = execSync('node bin/cli.js --version', { encoding: 'utf8' });
    expect(output).toContain('1.0.0');
  });

  test('should show projects', () => {
    const output = execSync('node bin/cli.js مشاريع', { encoding: 'utf8' });
    expect(output).toContain('مشاريع');
    expect(output).toContain('GitHub');
  });
});
