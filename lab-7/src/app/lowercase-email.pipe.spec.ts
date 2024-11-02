import { LowercaseEmailPipe } from './lowercase-email.pipe';

describe('LowercaseEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new LowercaseEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
