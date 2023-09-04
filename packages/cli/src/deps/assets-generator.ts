import fs from 'fs';
import {v4} from 'uuid';

export class AssetsGenerator {
  constructor(private readonly assetsPath: string) {}

  generate = (): void => {
    for (let i = 0; i < 10; i++) {
      const array = Array.from({length: 1_000_000}).map(this.fill);
      fs.appendFileSync(this.assetsPath, array.join('\n'));
    }
  };

  private fill = (): string => {
    return v4();
  };
}
