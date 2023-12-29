import { MMKV } from 'react-native-mmkv';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export const storage = new MMKV();

const clientStorage = {
    setItem: (key: string, value: any) => {
        storage.set(key, value);
    },
    getItem: <T>(key: string): T | null => {
        const value = storage.getString(key);
        return value === undefined ? null : (value as T);
    },
    removeItem: (key: string) => {
        storage.delete(key);
    },
};

export const clientPersister = createSyncStoragePersister({ storage: clientStorage });
