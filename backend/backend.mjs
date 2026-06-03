import PocketBase from 'pocketbase';

const pb = new PocketBase('https://gestons.girardin-tarby.fr');

export function getImageUrl(record, filename) {
    if (!filename) return null;
    return pb.files.getURL(record, filename);
}

