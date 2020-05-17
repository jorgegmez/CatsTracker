export type RetryQueueItem = QueueItem | null;

export const removeQueueHead = (queue: QueueSchema): QueueSchema => ({
  ...queue,
  items: queue.items.slice(1),
});

export const addQueueTail = (
  queue: QueueSchema,
  item: QueueItem,
): QueueSchema => ({...queue, items: [...queue.items, item]});

export const isEndOfQueueTail = (queue: QueueSchema): boolean =>
  queue.items.length <= 1;

export const retryQueueItem = (item: QueueItem): RetryQueueItem => {
  const updatedItem = item;

  if (updatedItem.retry >= 1) {
    updatedItem.retry -= 1;
    return updatedItem;
  }

  return null;
};
