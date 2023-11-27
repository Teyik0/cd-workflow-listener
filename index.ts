import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 8080;

app.get('/deploy', (req, res) => {
  console.log('Deploying...');
  exec('sh ./pull.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the script: ${error}`);
      return res.status(500).send('Internal Server Error');
    }
    console.log(`Script output: ${stdout}`);
    res.status(200).send('Script executed successfully!');
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
