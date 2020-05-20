import get from 'lodash/get';

import { isEndOfQueueTail, removeQueueHead, addQueueTail, retryQueueItem } from './utils';

type OnStart = () => void;
type Callback = (response: QueueItem) => void;
type QueueProcesor = (item: QueueItem) => Promise<QueueItem>;

const queueRunner = async (
  queue: QueueSchema,
  queueProcessor: QueueProcesor,
  onStart: OnStart,
  callback: Callback,
  onFinish?: Callback,
  onError?: Callback,
  onFinalError?: Callback,
): Promise<void> => {
  let safeQueue = queue;

  if (onStart) {
    onStart();
  }

  while (get(safeQueue, 'items.length', 0) >= 1) {
    const currentQueueItem = safeQueue.items[0];

    try {
      // eslint-disable-next-line no-await-in-loop
      const itemResult = await queueProcessor(currentQueueItem);

      if (itemResult) {
        callback(itemResult);

        if (isEndOfQueueTail(safeQueue) && onFinish) {
          onFinish(itemResult);
        }
        safeQueue = removeQueueHead(safeQueue);
      }
    } catch (error) {
      safeQueue = removeQueueHead(safeQueue);
      const retryItem = retryQueueItem(currentQueueItem);

      if (retryItem !== null) {
        if (onError) {
          onError(error);
        }
        safeQueue = addQueueTail(safeQueue, retryItem);
      } else {
        if (onFinalError) {
          onFinalError(error);
        }

        if (isEndOfQueueTail(safeQueue) && onFinish) {
          onFinish(error);
        }
      }
    }
  }
};

export { queueRunner };
