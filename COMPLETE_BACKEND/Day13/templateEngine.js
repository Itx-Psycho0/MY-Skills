import { readFile, writeFile } from 'fs/promises';
const filePath = new URL('./index.html', import.meta.url).pathname;

const data = await readFile(filePath, 'utf-8');

let template = data.toString();

const useData = {
    name: 'John Doe',
    passion: "Programmer"
}
for (const [key, value] of Object.entries(useData)) {
    template = template.replace(`{{${key}}}`, value);
}

await writeFile(new URL('./index2.html', import.meta.url).pathname, template);