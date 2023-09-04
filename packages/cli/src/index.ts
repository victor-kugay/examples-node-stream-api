import {Command} from 'commander';
import {assetsGenerator, fileUploader} from './deps';

if (process.argv.length === 2) {
  process.argv.push('-h');
}

const program = new Command();

program
  .name('examples-node-stream-api-cli')
  .description('CLI to Examples Node Stream API')
  .version('0.0.1');

program
  // prettier-ignore
  .command('assets')
  .description('Generate assets')
  .action(assetsGenerator.generate);

program
  .command('upload')
  .description('Upload file using stream')
  .action(fileUploader.upload);

program.parse();
