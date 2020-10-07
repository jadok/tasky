import jsonfile from 'jsonfile';

export const read = async (url: string) => jsonfile.readFile(url);
export const write = async (url: string, data: Object) => jsonfile.writeFile(url, data);
