import pkg from '@bull-board/api';

import { ExpressAdapter } from '@bull-board/express';

import mailQueue from '../queues/mailQueue.js';

import { BullAdapter } from '@bull-board/api/bullAdapter';

const { createBullBoard } = pkg;

const bullServerAdapter = new ExpressAdapter();

bullServerAdapter.setBasePath('/ui');

createBullBoard({
  queues: [new BullAdapter(mailQueue)],
  serverAdapter: bullServerAdapter
});

export default bullServerAdapter;
