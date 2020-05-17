import uuid from 'react-native-uuid-generator';
import AsyncStorage from '@react-native-community/async-storage';
import {queue} from '@constants';
import {addQueueTail, removeQueueHead} from './utils';

type QueueUpdate = {
  ok?: boolean;
  error?: boolean;
};

const getQueueTemplate = async (queueName: string): Promise<QueueSchema> => {
  return {
    id: await uuid.getRandomUUID(),
    name: queueName,
    items: [],
  };
};

const getQueue = async (queueName: string): Promise<QueueSchema> => {
  const localQueue =
    (await AsyncStorage.getItem(`${queue.QUEUE_PREFIX}_${queueName}`)) || '{}';
  return JSON.parse(localQueue);
};

const createQueue = async (queueName: string): Promise<void> => {
  const localQueue = await getQueueTemplate(queueName);

  return AsyncStorage.setItem(
    `${queue.QUEUE_PREFIX}_${queueName}`,
    JSON.stringify(localQueue),
  );
};

const clearQueues = async (): Promise<void> => {
  const allKeys = await AsyncStorage.getAllKeys();
  const allQueues = allKeys.filter((key) => key.startsWith(queue.QUEUE_PREFIX));
  return AsyncStorage.multiRemove(allQueues);
};

const clearQueue = async (queueName: string): Promise<void> => {
  return AsyncStorage.removeItem(`${queue.QUEUE_PREFIX}_${queueName}`);
};

const updateQueue = async (newQueue: QueueSchema): Promise<QueueSchema> => {
  const localQueue = await getQueue(newQueue.name);

  if (localQueue.id) {
    await AsyncStorage.setItem(
      `${queue.QUEUE_PREFIX}_${newQueue.name}`,
      JSON.stringify(newQueue),
    );

    return newQueue;
  }
  return newQueue;
};

const addQueueItem = async (
  queueName: string,
  item: QueueItem,
): Promise<QueueSchema> => {
  try {
    let localQueue = await getQueue(queueName);

    if (!localQueue.id) {
      await createQueue(queueName);
      localQueue = await getQueue(queueName);
    }

    const updatedQueue = addQueueTail(localQueue, {...item, queue: queueName});

    return updateQueue(updatedQueue);
  } catch (error) {
    return error;
  }
};

const removeQueueItem = async (queue: string): Promise<QueueSchema> => {
  try {
    const localQueue = await getQueue(queue);
    const updatedQueue = removeQueueHead(localQueue);

    return updateQueue(updatedQueue);
  } catch (error) {
    return error;
  }
};

export {
  createQueue,
  clearQueue,
  clearQueues,
  addQueueItem,
  removeQueueItem,
  getQueue,
  updateQueue,
};
