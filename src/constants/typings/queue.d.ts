interface QueueSchema {
  id: string;
  name: string;
  items: QueueItem[];
}

interface QueueItem {
  file: string;
  name: string;
  retry: number;
  url?: string;
  uri?: string;
  queue: string;
  type?: string;
}
